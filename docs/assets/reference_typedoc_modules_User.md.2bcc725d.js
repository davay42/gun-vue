import{_ as s,C as t,o,c as r,H as n,Q as e}from"./chunks/framework.4eb5045b.js";const E=JSON.parse('{"title":"Module: User","description":"","frontmatter":{},"headers":[],"relativePath":"reference/typedoc/modules/User.md","filePath":"reference/typedoc/modules/User.md","pages":["CHANGELOG","basics/video","basics/video/2021/03-02","basics/video/2021/11-19","basics/video/2021/11-27","basics/video/2022/01-12","basics/video/2022/01-22","basics/video/2022/02-09","basics/video/2022/03-26","basics/video/2022/04-13","basics/video/2022/07-08","basics/video/2022/07-21","basics/video/2022/07-23","basics/video/2022/08-01","basics/video/2022/08-05","basics/video/2023/02-03","basics/video/2023/03-06","basics/video/2023/04-15","basics/video/2023/04-17","basics/video/2023/04-21","basics/video/2023/04-27","basics/video/2023/05-02","basics/what-is","explanations/crdt","explanations/qna","explanations/stack","how-to/use-components","index","packages/components","packages/composables","packages/","packages/relay","reference/components","reference/","reference/typedoc/README","reference/typedoc/interfaces/Account.Account","reference/typedoc/interfaces/Account.Profile","reference/typedoc/interfaces/Auth.Auth","reference/typedoc/interfaces/Auth.useAuth","reference/typedoc/interfaces/Certificates.CertOptions","reference/typedoc/interfaces/Certificates.Policy","reference/typedoc/interfaces/Chat.Message","reference/typedoc/interfaces/Crypto.Entity","reference/typedoc/interfaces/Dict.DictRecord","reference/typedoc/interfaces/File.PictureUploadData","reference/typedoc/interfaces/File.PictureUploadOptions","reference/typedoc/interfaces/File.UploadState","reference/typedoc/interfaces/Gift.Gift","reference/typedoc/interfaces/Gifts.GiftList","reference/typedoc/interfaces/Guests.Guest","reference/typedoc/interfaces/Mates.Mate","reference/typedoc/interfaces/Md.MdContent","reference/typedoc/interfaces/Mouse.Mouse","reference/typedoc/interfaces/Mouse.useMouse","reference/typedoc/interfaces/Post.Post","reference/typedoc/interfaces/Post.PostContent","reference/typedoc/interfaces/PrivateChat.Chat","reference/typedoc/interfaces/Project.ProjectItem","reference/typedoc/interfaces/Reaction.Reaction","reference/typedoc/interfaces/Reaction.ReactionVector","reference/typedoc/interfaces/Reactions.AuthorList","reference/typedoc/interfaces/Relay.Relay","reference/typedoc/interfaces/Space.Arrow","reference/typedoc/interfaces/Space.Pos","reference/typedoc/interfaces/Space.SpaceGuest","reference/typedoc/interfaces/User.User","reference/typedoc/interfaces/room_useRoom.CurrentRoom","reference/typedoc/modules","reference/typedoc/modules/Account","reference/typedoc/modules/Auth","reference/typedoc/modules/Background","reference/typedoc/modules/Cast","reference/typedoc/modules/Certificates","reference/typedoc/modules/Chat","reference/typedoc/modules/Color","reference/typedoc/modules/Crypto","reference/typedoc/modules/Dict","reference/typedoc/modules/Draw","reference/typedoc/modules/File","reference/typedoc/modules/Gift","reference/typedoc/modules/Gifts","reference/typedoc/modules/Guests","reference/typedoc/modules/Gun","reference/typedoc/modules/GunWorker","reference/typedoc/modules/Languages","reference/typedoc/modules/Mates","reference/typedoc/modules/Md","reference/typedoc/modules/Mouse","reference/typedoc/modules/Post","reference/typedoc/modules/Posts","reference/typedoc/modules/PrivateChat","reference/typedoc/modules/Project","reference/typedoc/modules/Projects","reference/typedoc/modules/QR","reference/typedoc/modules/Reaction","reference/typedoc/modules/Reactions","reference/typedoc/modules/Relay","reference/typedoc/modules/Relays","reference/typedoc/modules/Room","reference/typedoc/modules/Space","reference/typedoc/modules/Tags","reference/typedoc/modules/Theme","reference/typedoc/modules/Torrent","reference/typedoc/modules/User","reference/typedoc/modules/Zip","reference/typedoc/modules/room_useRoom","reference/typedoc/modules/useProject","reference/typedoc/modules/user_useAvatar","tutorials/first-app","tutorials/getting-started","tutorials/vue-app"]}'),l={name:"reference/typedoc/modules/User.md"},c=e('<p><a href="./../README.html">Gun-Vue docs - v0.18.1</a> / <a href="./../modules.html">Exports</a> / User</p><h1 id="module-user" tabindex="-1">Module: User <a class="header-anchor" href="#module-user" aria-label="Permalink to &quot;Module: User&quot;">​</a></h1><h2 id="local-first-reactive-p2p-authentication-system" tabindex="-1">Local-first reactive p2p authentication system <a class="header-anchor" href="#local-first-reactive-p2p-authentication-system" aria-label="Permalink to &quot;Local-first reactive p2p authentication system&quot;">​</a></h2><p>Avatar, Profile and other verifiable individuals&#39; representations fully decentralized.</p><h2 id="usericon" tabindex="-1">&lt;UserIcon /&gt; <a class="header-anchor" href="#usericon" aria-label="Permalink to &quot;&amp;lt;UserIcon /&amp;gt;&quot;">​</a></h2>',5),p=e(`<h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./../interfaces/User.User.html">User</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./User.html#selecteduser">selectedUser</a></li><li><a href="./User.html#user">user</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./User.html#addprofilefield">addProfileField</a></li><li><a href="./User.html#auth">auth</a></li><li><a href="./User.html#ismine">isMine</a></li><li><a href="./User.html#ispair">isPair</a></li><li><a href="./User.html#leave">leave</a></li><li><a href="./User.html#updateprofile">updateProfile</a></li><li><a href="./User.html#useuser">useUser</a></li></ul><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="selecteduser" tabindex="-1">selectedUser <a class="header-anchor" href="#selecteduser" aria-label="Permalink to &quot;selectedUser&quot;">​</a></h3><p>• <code>Const</code> <strong>selectedUser</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pub</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L17" target="_blank" rel="noreferrer">src/user/useUser.ts:17</a></p><hr><h3 id="user" tabindex="-1">user <a class="header-anchor" href="#user" aria-label="Permalink to &quot;user&quot;">​</a></h3><p>• <code>Const</code> <strong>user</strong>: <a href="./../interfaces/User.User.html"><code>User</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L72" target="_blank" rel="noreferrer">src/user/useUser.ts:72</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addprofilefield" tabindex="-1">addProfileField <a class="header-anchor" href="#addprofilefield" aria-label="Permalink to &quot;addProfileField&quot;">​</a></h3><p>▸ <strong>addProfileField</strong>(<code>title</code>): <code>void</code></p><p>Add a field to the User profile</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>title</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { addProfileField } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">addProfileField</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&#39;city&#39;</span><span style="color:#E1E4E8;"> )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { addProfileField } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">addProfileField</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&#39;city&#39;</span><span style="color:#24292E;"> )</span></span></code></pre></div><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L234" target="_blank" rel="noreferrer">src/user/useUser.ts:234</a></p><hr><h3 id="auth" tabindex="-1">auth <a class="header-anchor" href="#auth" aria-label="Permalink to &quot;auth&quot;">​</a></h3><p>▸ <strong>auth</strong>(<code>pair</code>, <code>cb?</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Authenticate with a SEA key pair</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pair</code></td><td style="text-align:left;"><code>ISEAPair</code></td></tr><tr><td style="text-align:left;"><code>cb</code></td><td style="text-align:left;">(<code>pair</code>: <code>ISEAPair</code>) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { auth, SEA } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pair</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">SEA</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">pair</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">(pair)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { auth, SEA } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pair</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">SEA</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">pair</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">(pair)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L188" target="_blank" rel="noreferrer">src/user/useUser.ts:188</a></p><hr><h3 id="ismine" tabindex="-1">isMine <a class="header-anchor" href="#ismine" aria-label="Permalink to &quot;isMine&quot;">​</a></h3><p>▸ <strong>isMine</strong>(<code>soul</code>): <code>boolean</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>soul</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L222" target="_blank" rel="noreferrer">src/user/useUser.ts:222</a></p><hr><h3 id="ispair" tabindex="-1">isPair <a class="header-anchor" href="#ispair" aria-label="Permalink to &quot;isPair&quot;">​</a></h3><p>▸ <strong>isPair</strong>(<code>pair</code>): <code>boolean</code></p><p>Check if the object is a proper SEA pair</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pair</code></td><td style="text-align:left;"><code>ISEAPair</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L258" target="_blank" rel="noreferrer">src/user/useUser.ts:258</a></p><hr><h3 id="leave" tabindex="-1">leave <a class="header-anchor" href="#leave" aria-label="Permalink to &quot;leave&quot;">​</a></h3><p>▸ <strong>leave</strong>(): <code>void</code></p><p>Log out the user</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { leave } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">leave</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { leave } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">leave</span><span style="color:#24292E;">()</span></span></code></pre></div><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L208" target="_blank" rel="noreferrer">src/user/useUser.ts:208</a></p><hr><h3 id="updateprofile" tabindex="-1">updateProfile <a class="header-anchor" href="#updateprofile" aria-label="Permalink to &quot;updateProfile&quot;">​</a></h3><p>▸ <strong>updateProfile</strong>(<code>field</code>, <code>data</code>): <code>void</code></p><p>Update a profile field</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>field</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { updateProfile } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">updateProfile</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&#39;city&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Bangkok&#39;</span><span style="color:#E1E4E8;"> )</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { updateProfile } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">updateProfile</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&#39;city&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Bangkok&#39;</span><span style="color:#24292E;"> )</span></span></code></pre></div><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L247" target="_blank" rel="noreferrer">src/user/useUser.ts:247</a></p><hr><h3 id="useuser" tabindex="-1">useUser <a class="header-anchor" href="#useuser" aria-label="Permalink to &quot;useUser&quot;">​</a></h3><p>▸ <strong>useUser</strong>(): <code>Object</code></p><p>Get access to current logged in user</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>auth</code></td><td style="text-align:left;">(<code>pair</code>: <code>ISEAPair</code>, <code>cb</code>: (<code>pair</code>: <code>ISEAPair</code>) =&gt; <code>void</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;</td></tr><tr><td style="text-align:left;"><code>leave</code></td><td style="text-align:left;">() =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>user</code></td><td style="text-align:left;"><a href="./../interfaces/User.User.html"><code>User</code></a></td></tr></tbody></table><p><strong><code>Example</code></strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useUser } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">user</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">auth</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">leave</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useUser</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useUser } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@gun-vue/composables&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">user</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">auth</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">leave</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useUser</span><span style="color:#24292E;">()</span></span></code></pre></div><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/DeFUCC/gun-vue/blob/fad8f62d/src/user/useUser.ts#L123" target="_blank" rel="noreferrer">src/user/useUser.ts:123</a></p>`,95);function i(d,u,h,f,y,b){const a=t("UserIcon");return o(),r("div",null,[c,n(a),p])}const g=s(l,[["render",i]]);export{E as __pageData,g as default};
