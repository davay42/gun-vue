import{_ as e,o as t,c as o,X as c}from"./chunks/framework.e76a7413.js";const m=JSON.parse('{"title":"Module: Zip","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/Zip.md","filePath":"reference/typedoc/modules/Zip.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),s={name:"reference/typedoc/modules/Zip.md"},r=c(`<p><a href="./../README.html">Gun-Vue docs - v0.18.0</a> / <a href="./../modules.html">Exports</a> / Zip</p><h1 id="module-zip" tabindex="-1">Module: Zip <a class="header-anchor" href="#module-zip" aria-label="Permalink to &quot;Module: Zip&quot;">​</a></h1><p>Read and write zip files</p><p><strong><code>See</code></strong></p><p><a href="https://github.com/Stuk/jszip" target="_blank" rel="noreferrer">https://github.com/Stuk/jszip</a></p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./Zip.html#usezip">useZip</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="usezip" tabindex="-1">useZip <a class="header-anchor" href="#usezip" aria-label="Permalink to &quot;useZip&quot;">​</a></h3><p>▸ <strong>useZip</strong>(): <code>Object</code></p><p>Zip file creation toolbox</p><p><strong><code>Example</code></strong></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useZip</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@gun-vue/composables</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> zip</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> zipPost</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> addMd</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> addFile</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> downloadZip </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useZip</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>addFile</code></td><td style="text-align:left;">(<code>__namedParameters</code>: { <code>file</code>: <code>string</code> ; <code>folder?</code>: <code>string</code> ; <code>title</code>: <code>string</code> }) =&gt; <code>Promise</code>&lt;<code>string</code>&gt;</td></tr><tr><td style="text-align:left;"><code>addMd</code></td><td style="text-align:left;">(<code>__namedParameters</code>: { <code>md</code>: <a href="./../interfaces/Md.MdContent.html"><code>MdContent</code></a> ; <code>title</code>: <code>string</code> }) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>downloadZip</code></td><td style="text-align:left;">(<code>__namedParameters</code>: { <code>title</code>: <code>string</code> }) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>zip</code></td><td style="text-align:left;"><code>JSZip</code></td></tr><tr><td style="text-align:left;"><code>zipPost</code></td><td style="text-align:left;">(<code>post</code>: { <code>content?</code>: <code>string</code> ; <code>statement?</code>: <code>string</code> ; <code>text?</code>: <code>string</code> ; <code>title?</code>: <code>string</code> }) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/cd8df69b/src/file/useZip.ts#L23" target="_blank" rel="noreferrer">src/file/useZip.ts:23</a></p>`,19),n=[r];function a(d,i,l,p,f,u){return t(),o("div",null,n)}const h=e(s,[["render",a]]);export{m as __pageData,h as default};