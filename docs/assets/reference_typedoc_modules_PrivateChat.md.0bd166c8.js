import{_ as e,o as t,c as a,X as r}from"./chunks/framework.088f8093.js";const m=JSON.parse('{"title":"Module: PrivateChat","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/PrivateChat.md","filePath":"reference/typedoc/modules/PrivateChat.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","packages/components","packages/composables","packages/","reference/components","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","reference/typedoc/modules/user_useAvatar","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),o={name:"reference/typedoc/modules/PrivateChat.md"},c=r('<p><a href="./../README.html">Gun-Vue docs - v0.18.1</a> / <a href="./../modules.html">Exports</a> / PrivateChat</p><h1 id="module-privatechat" tabindex="-1">Module: PrivateChat <a class="header-anchor" href="#module-privatechat" aria-label="Permalink to &quot;Module: PrivateChat&quot;">​</a></h1><h2 id="private-chats" tabindex="-1">Private chats <a class="header-anchor" href="#private-chats" aria-label="Permalink to &quot;Private chats&quot;">​</a></h2><p>You can communicate securely to others using yours and theirs elliptic private keys. Messages are signed and mixed in daily batches. The content can be anything.</p><p>On the main page you have a list of your companions. If they have their epub key published, they can receive messages from others. The notification system evolves over time and is powered by Web Notifications API and more.</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/PrivateChat.Chat.html">Chat</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./PrivateChat.html#useprivatechat">usePrivateChat</a></li><li><a href="./PrivateChat.html#useprivatechatcount">usePrivateChatCount</a></li><li><a href="./PrivateChat.html#useprivatechatlist">usePrivateChatList</a></li></ul><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="useprivatechat" tabindex="-1">usePrivateChat <a class="header-anchor" href="#useprivatechat" aria-label="Permalink to &quot;usePrivateChat&quot;">​</a></h3><p>▸ <strong>usePrivateChat</strong>(<code>pub</code>): <a href="./../interfaces/PrivateChat.Chat.html"><code>Chat</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./../interfaces/PrivateChat.Chat.html"><code>Chat</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/154380a9/src/private/usePrivateChat.ts#L20" target="_blank" rel="noreferrer">src/private/usePrivateChat.ts:20</a></p><hr><h3 id="useprivatechatcount" tabindex="-1">usePrivateChatCount <a class="header-anchor" href="#useprivatechatcount" aria-label="Permalink to &quot;usePrivateChatCount&quot;">​</a></h3><p>▸ <strong>usePrivateChatCount</strong>(<code>pub</code>): <code>Object</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>available</code></td><td style="text-align:left;"><code>Ref</code>&lt;<code>boolean</code>&gt;</td></tr><tr><td style="text-align:left;"><code>count</code></td><td style="text-align:left;"><code>ComputedRef</code>&lt;<code>number</code>&gt;</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/154380a9/src/private/usePrivateChat.ts#L93" target="_blank" rel="noreferrer">src/private/usePrivateChat.ts:93</a></p><hr><h3 id="useprivatechatlist" tabindex="-1">usePrivateChatList <a class="header-anchor" href="#useprivatechatlist" aria-label="Permalink to &quot;usePrivateChatList&quot;">​</a></h3><p>▸ <strong>usePrivateChatList</strong>(): <code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/Chat.Message.html"><code>Message</code></a>&gt;</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Record</code>&lt;<code>string</code>, <a href="./../interfaces/Chat.Message.html"><code>Message</code></a>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/154380a9/src/private/usePrivateChat.ts#L118" target="_blank" rel="noreferrer">src/private/usePrivateChat.ts:118</a></p>',36),s=[c];function i(n,d,l,h,f,u){return t(),a("div",null,s)}const y=e(o,[["render",i]]);export{m as __pageData,y as default};