/**
 * File handling functions
 * @module File
 * @group Files
 * */

import { reactive } from "vue";

/**
 * A method to download any text as a file
 * @param {string|Blob} text - the text to download
 * @param {string} fileType - the file type like "application/json"
 * @param {string} fileName - the full file name like "myKey.json"
 * @param {boolean} [isBlob=true]
 */
export function downloadFile(text, fileType, fileName, isBlob = true) {
	const a = document.createElement("a");
	a.download = fileName;

	if (isBlob) {
		a.href = URL.createObjectURL(new Blob([text], { type: fileType }));
		// setTimeout(function () {
		// 	URL.revokeObjectURL(a.href);
		// }, 1500);
	} else {
		a.href = `data:${fileType};,${text}`;
	}
	a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
	a.style.display = "none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
}

/**
 * Upload and parse JSON keypair
 * @param {FileList} files
 * @param {Function} [callback] - a function to handle the loaded file from the reader
 */
export function uploadText(files, callback = (r) => console.log(r)) {
	if (!files.length) return;
	const file = files[0];
	const maxBytes = 20000000;
	if (file.size > maxBytes) {
		console.error("File is bigger than " + niceBytes(maxBytes)) + " limit";
		return;
	}
	let reader = new FileReader();
	reader.readAsText(file);
	reader.onload = () => {
		callback(reader.result);
	};
}

/**
 * @typedef {Object} PictureUploadOptions
 * @property {boolean} [preserveRatio=false] - should we preserve the original picture aspect ratio?
 * @property {number} [picSize=100] - width of the rendered picture
 * @property {number} [maxSize=10240000] - maximum size of an uploaded picture
 */

/**
 * @typedef {Object} PictureUploadData
 * @property {Object} state - a reactive object with the state of the upload
 * @property {Function} handleChange - handler function to use with `@change="handleUpload"` on an `<input type="file">` element
 */

/**
 * @typedef {Object} UploadState
 * @property {Array} errors
 * @property {'' | 'loading' | 'success'} status
 * @property {Object} output
 */

/**
 * Process an uploaded picture by rendering in into a canvas with given size. Returns a base64 encoded image to be stored and displayed as `img.src`
 * @param {PictureUploadOptions} options
 * @returns {PictureUploadData}
 * @example
 * const src = ref(null)
 *
 * const {state, handleUpload} = usePictureUpload({
 *  preserveRatio: true,
 * })
 *
 * watch(()=>state.output, file => src.value = file.content)
 */
export function usePictureUpload({
	preserveRatio = false,
	picSize = 100,
	maxSize = 10240000,
}) {
	/** @type {UploadState} */
	const state = reactive({
		errors: [],
		status: "",
		output: {},
	});

	/**
	 * @param {Event} event
	 */
	function handleChange(event) {
		const fileList = event.target.files;
		reset();
		if (!fileList.length) return;
		state.status = "loading";
		Array.from(fileList).map((file) => processFile(file));
	}

	/**
	 * @param {File} file
	 */
	function processFile(file) {
		fileToBase64(file).then((res) => {
			state.output = {
				name: sanitizeFileName(file.name),
				content: res,
				size: niceBytes(Math.round((res.length * 3) / 4)),
			};
			state.status = "success";
		});
		return null;
	}

	/**
	 * @param {File} file
	 * @returns {Promise<string>}
	 */
	function fileToBase64(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader(),
				readerBase64 = new FileReader(),
				blob = file.slice(0, 4);
			reader.readAsArrayBuffer(blob);
			reader.onloadend = (e) => {
				const result = e.target.result;
				let isValidMimeType = checkMimetype(getMimeTypeSignature(result));

				if (bytesToMegabytes(file.size) > bytesToMegabytes(maxSize)) {
					state.errors.push({
						message: "File size is too large!",
					});
				}

				if (isValidMimeType === false) {
					state.errors.push({
						message: "File type is not supported!",
					});
				}

				if (state.errors.length > 0) {
					flashErrors(state.errors);
					reset();
					return;
				} else {
					readerBase64.readAsDataURL(file);
				}
			};

			readerBase64.onloadend = () => {
				const img = new Image();
				const result = readerBase64.result;
				if (typeof result !== "string") {
					return;
				}
				img.src = result;
				img.onload = () => {
					const naturalAspect = preserveRatio
						? img.naturalWidth / img.naturalHeight
						: 1;

					const canvas = document.createElement("canvas");
					canvas.width = picSize;
					canvas.height = picSize / naturalAspect;

					const context = canvas.getContext("2d");
					context.drawImage(img, 0, 0, canvas.width, canvas.height);
					resolve(canvas.toDataURL());
				};
			};

			reader.onerror = (error) => reject(error);
			readerBase64.onerror = (error) => reject(error);
		});
	}

	function reset() {
		state.status = "";
		state.errors = [];
		state.output = {};
	}

	/**
	 * @param {number} bytes
	 * @returns {number}
	 */
	function bytesToMegabytes(bytes) {
		const value = bytes * Math.pow(10, -6);
		return value;
	}

	/**
	 * @param {string} signature
	 * @returns {boolean}
	 */
	function checkMimetype(signature) {
		const signatures = [
			"89504E47", // image/png
			"47494638", // image/gif
			"FFD8FFDB", // image/jpeg
			"FFD8FFE0",
			"FFD8FFE1",
			"FFD8FFE2",
			"FFD8FFE3",
			"FFD8FFE8",
			"FFD8FFED",
			"3C3F786D", // svg/xml
			"3C737667",
		];
		return signatures.includes(signature);
	}

	/**
	 * @param {ArrayBufferLike} data
	 * @returns {string}
	 */
	function getMimeTypeSignature(data) {
		const uint = new Uint8Array(data);
		let bytes = [];
		uint.forEach((byte) => {
			bytes.push(byte.toString(16));
		});
		return bytes.join("").toUpperCase();
	}

	/**
	 * @param {string} name
	 * @returns {string}
	 */
	function sanitizeFileName(name) {
		return (
			name
				.replace(/\.[^/.]+$/, "")
				// .replace(/[^a-z0-9]/gi, "_")
				.toLowerCase()
		);
	}

	/**
	 * @param {string[]} errors
	 */
	function flashErrors(errors) {
		if (errors.length === 2) {
			console.error("File upload failed due to size and type!");
		} else {
			console.error(errors[0].message + errors[0].type);
		}
	}

	return {
		state,
		handleChange,
	};
}

const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

/**
 * @param {number|string} x
 * @returns {string}
 */
function niceBytes(x) {
	let l = 0;

	let n = parseInt(x + "", 10) || 0;

	while (n >= 1024 && ++l) {
		n = n / 1024;
	}
	return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

/**
 * @param {string} encoded
 * @returns {string|null}
 */
export function base64MimeType(encoded) {
	var result = null;
	if (typeof encoded !== "string") {
		return result;
	}
	var mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
	if (mime && mime.length) {
		result = mime[1];
	}
	return result;
}

/**
 * @param {string} encoded
 * @returns {string|undefined}
 */
export function base64FileType(encoded) {
	return encoded.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)?.[0];
}

/**
 * @param {string} encoded
 * @returns {string}
 */
export function base64Extension(encoded) {
	return encoded.substring(
		encoded.indexOf("/") + 1,
		encoded.indexOf(";base64")
	);
}

var signatures = {
	JVBERi0: "application/pdf",
	R0lGODdh: "image/gif",
	R0lGODlh: "image/gif",
	iVBORw0KGgo: "image/png",
	"/9j/": "image/jpg",
};

/**
 * @param {string} b64
 * @returns {string|undefined}
 */
export function detectMimeType(b64) {
	for (var s in signatures) {
		if (b64.indexOf(s) === 0) {
			return signatures[s];
		}
	}
}

// DRAG AND DROP
//https://medium.com/devschacht/https-medium-com-kasimoka-joseph-zimmerman-drag-drop-file-uploader-vanilla-js-de850d74aa2f
//https://github.com/quarklemotion/html5-file-selector/blob/master/src/Html5FileSelector.js
