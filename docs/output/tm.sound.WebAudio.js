Ext.data.JsonP.tm_sound_WebAudio({"tagname":"class","name":"tm.sound.WebAudio","extends":"tm.event.EventDispatcher","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.sound.WebAudio","members":{"cfg":[],"property":[{"name":"_listeners","tagname":"property","owner":"tm.event.EventDispatcher","meta":{"private":true},"id":"property-_listeners"},{"name":"buffer","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-buffer"},{"name":"context","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-context"},{"name":"loaded","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-loaded"},{"name":"loop","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-loop"},{"name":"panner","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-panner"},{"name":"playbackRate","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-playbackRate"},{"name":"valume","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-valume"},{"name":"volume","tagname":"property","owner":"tm.sound.WebAudio","meta":{},"id":"property-volume"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.sound.WebAudio","meta":{},"id":"method-constructor"},{"name":"_load","tagname":"method","owner":"tm.sound.WebAudio","meta":{"private":true},"id":"method-_load"},{"name":"_setup","tagname":"method","owner":"tm.sound.WebAudio","meta":{"private":true},"id":"method-_setup"},{"name":"addEventListener","tagname":"method","owner":"tm.event.EventDispatcher","meta":{"chainable":true},"id":"method-addEventListener"},{"name":"clearEventListener","tagname":"method","owner":"tm.event.EventDispatcher","meta":{"chainable":true},"id":"method-clearEventListener"},{"name":"clone","tagname":"method","owner":"tm.sound.WebAudio","meta":{},"id":"method-clone"},{"name":"dispatchEvent","tagname":"method","owner":"tm.event.EventDispatcher","meta":{},"id":"method-dispatchEvent"},{"name":"hasEventListener","tagname":"method","owner":"tm.event.EventDispatcher","meta":{},"id":"method-hasEventListener"},{"name":"on","tagname":"method","owner":"tm.event.EventDispatcher","meta":{"chainable":true},"id":"method-on"},{"name":"pause","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-pause"},{"name":"play","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-play"},{"name":"removeEventListener","tagname":"method","owner":"tm.event.EventDispatcher","meta":{"chainable":true},"id":"method-removeEventListener"},{"name":"resume","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-resume"},{"name":"setBuffer","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setBuffer"},{"name":"setLoop","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setLoop"},{"name":"setOrientation","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setOrientation"},{"name":"setPlaybackRate","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setPlaybackRate"},{"name":"setPosition","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setPosition"},{"name":"setVelocity","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setVelocity"},{"name":"setVolume","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-setVolume"},{"name":"stop","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-stop"},{"name":"tone","tagname":"method","owner":"tm.sound.WebAudio","meta":{"chainable":true},"id":"method-tone"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":13,"files":[{"filename":"webaudio.js","href":"webaudio.html#tm-sound-WebAudio"}],"html_meta":{},"statics":{"cfg":[],"property":[{"name":"isAvailable","tagname":"property","owner":"tm.sound.WebAudio","meta":{"static":true},"id":"static-property-isAvailable"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["tm.event.EventDispatcher"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='docClass'>tm.event.EventDispatcher</a><div class='subclass '><strong>tm.sound.WebAudio</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/webaudio.html#tm-sound-WebAudio' target='_blank'>webaudio.js</a></div></pre><div class='doc-contents'><p>WebAudioクラス</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-_listeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-property-_listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-property-_listeners' class='name not-expandable'>_listeners</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-buffer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-buffer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-buffer' class='name not-expandable'>buffer</a><span> : Object</span></div><div class='description'><div class='short'><p>@TODO ?</p>\n</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='property-context' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-context' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-context' class='name not-expandable'>context</a><span> : Object</span></div><div class='description'><div class='short'><p>context</p>\n</div><div class='long'><p>context</p>\n</div></div></div><div id='property-loaded' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-loaded' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-loaded' class='name expandable'>loaded</a><span> : Boolean</span></div><div class='description'><div class='short'>loaded ...</div><div class='long'><p>loaded</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-loop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-loop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-loop' class='name not-expandable'>loop</a><span> : Object</span></div><div class='description'><div class='short'><p>@TODO ?</p>\n</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='property-panner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-panner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-panner' class='name not-expandable'>panner</a><span> : Object</span></div><div class='description'><div class='short'><p>panner</p>\n</div><div class='long'><p>panner</p>\n</div></div></div><div id='property-playbackRate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-playbackRate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-playbackRate' class='name not-expandable'>playbackRate</a><span> : Object</span></div><div class='description'><div class='short'><p>@TODO ?</p>\n</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='property-valume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-valume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-valume' class='name not-expandable'>valume</a><span> : Object</span></div><div class='description'><div class='short'><p>@TODO ?</p>\n</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='property-volume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-property-volume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-property-volume' class='name expandable'>volume</a><span> : Number</span></div><div class='description'><div class='short'>volume ...</div><div class='long'><p>volume</p>\n<p>Defaults to: <code>0.8</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='static-property-isAvailable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-static-property-isAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-static-property-isAvailable' class='name not-expandable'>isAvailable</a><span> : Object</span><strong class='static signature' >static</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.sound.WebAudio-method-constructor' class='name expandable'>tm.sound.WebAudio</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/tm.event.EventDispatcher-method-constructor' rel='tm.event.EventDispatcher-method-constructor' class='docClass'>tm.event.EventDispatcher.constructor</a></p></div></div></div><div id='method-_load' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-_load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-_load' class='name expandable'>_load</a>( <span class='pre'>src</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>src</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_setup' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-_setup' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-_setup' class='name expandable'>_setup</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>イベントリスナー追加 ...</div><div class='long'><p>イベントリスナー追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clearEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-clearEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-clearEventListener' class='name expandable'>clearEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>リスナーを全てクリア ...</div><div class='long'><p>リスナーを全てクリア</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>複製 ...</div><div class='long'><p>複製</p>\n</div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'>e</span> )</div><div class='description'><div class='short'>イベント起動 ...</div><div class='long'><p>イベント起動</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> )</div><div class='description'><div class='short'>登録されたイベントがあるかをチェック ...</div><div class='long'><p>登録されたイベントがあるかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-on' class='name expandable'>on</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>イベントリスナー追加(addEventListenerと同様) ...</div><div class='long'><p>イベントリスナー追加(addEventListenerと同様)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-play' class='name expandable'>play</a>( <span class='pre'>time</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>再生\n- noteGrainOn ... ...</div><div class='long'><p>再生\n- noteGrainOn ... http://www.html5rocks.com/en/tutorials/casestudies/munkadoo_bouncymouse/</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>リスナーを削除 ...</div><div class='long'><p>リスナーを削除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-resume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-resume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-resume' class='name expandable'>resume</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setBuffer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setBuffer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setBuffer' class='name expandable'>setBuffer</a>( <span class='pre'>v</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>dummy\nチェーンメソッド用 ...</div><div class='long'><p>dummy\nチェーンメソッド用</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setLoop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setLoop' class='name expandable'>setLoop</a>( <span class='pre'>v</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>dummy\nチェーンメソッド用 ...</div><div class='long'><p>dummy\nチェーンメソッド用</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setOrientation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setOrientation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setOrientation' class='name expandable'>setOrientation</a>( <span class='pre'>x, y, z</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>dummy ...</div><div class='long'><p>dummy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>z</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPlaybackRate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setPlaybackRate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setPlaybackRate' class='name expandable'>setPlaybackRate</a>( <span class='pre'>v</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>チェーンメソッド用 ...</div><div class='long'><p>チェーンメソッド用</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setPosition' class='name expandable'>setPosition</a>( <span class='pre'>x, y, z</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>dummy ...</div><div class='long'><p>dummy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>z</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setVelocity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setVelocity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setVelocity' class='name expandable'>setVelocity</a>( <span class='pre'>x, y, z</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>dummy ...</div><div class='long'><p>dummy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>z</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setVolume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-setVolume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-setVolume' class='name expandable'>setVolume</a>( <span class='pre'>v</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>dummy\nチェーンメソッド用 ...</div><div class='long'><p>dummy\nチェーンメソッド用</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-stop' class='name expandable'>stop</a>( <span class='pre'>time</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>停止 ...</div><div class='long'><p>停止</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>time</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-tone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.sound.WebAudio'>tm.sound.WebAudio</span><br/><a href='source/webaudio.html#tm-sound-WebAudio-method-tone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.sound.WebAudio-method-tone' class='name expandable'>tone</a>( <span class='pre'>hertz, seconds</span> ) : <a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hertz</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>seconds</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.sound.WebAudio\" rel=\"tm.sound.WebAudio\" class=\"docClass\">tm.sound.WebAudio</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});