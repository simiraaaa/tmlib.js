Ext.data.JsonP.tm_event_EventDispatcher({"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/tm.anim.Tween' rel='tm.anim.Tween' class='docClass'>tm.anim.Tween</a></div><div class='dependency'><a href='#!/api/tm.app.Element' rel='tm.app.Element' class='docClass'>tm.app.Element</a></div><div class='dependency'><a href='#!/api/tm.app.Timeline' rel='tm.app.Timeline' class='docClass'>tm.app.Timeline</a></div><div class='dependency'><a href='#!/api/tm.app.Tweener' rel='tm.app.Tweener' class='docClass'>tm.app.Tweener</a></div><div class='dependency'><a href='#!/api/tm.asset.Loader' rel='tm.asset.Loader' class='docClass'>tm.asset.Loader</a></div><div class='dependency'><a href='#!/api/tm.asset.MapSheet' rel='tm.asset.MapSheet' class='docClass'>tm.asset.MapSheet</a></div><div class='dependency'><a href='#!/api/tm.asset.SpriteSheet' rel='tm.asset.SpriteSheet' class='docClass'>tm.asset.SpriteSheet</a></div><div class='dependency'><a href='#!/api/tm.asset.Texture' rel='tm.asset.Texture' class='docClass'>tm.asset.Texture</a></div><div class='dependency'><a href='#!/api/tm.net.WebSocket' rel='tm.net.WebSocket' class='docClass'>tm.net.WebSocket</a></div><div class='dependency'><a href='#!/api/tm.sound.WebAudio' rel='tm.sound.WebAudio' class='docClass'>tm.sound.WebAudio</a></div><div class='dependency'><a href='#!/api/tm.util.Flow' rel='tm.util.Flow' class='docClass'>tm.util.Flow</a></div><h4>Files</h4><div class='dependency'><a href='source/eventdispatcher.html#tm-event-EventDispatcher' target='_blank'>eventdispatcher.js</a></div></pre><div class='doc-contents'><p>Event Dispatcher</p>\n\n<h3>Reference</h3>\n\n<p>-(EventDispatcher - ActionScript 3.0 コンポーネントリファレンスガイド)[http://livedocs.adobe.com/flash/9.0_jp/ActionScriptLangRefV3/flash/events/EventDispatcher.html]</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_listeners' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-property-_listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-property-_listeners' class='name expandable'>_listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.event.EventDispatcher-method-constructor' class='name expandable'>tm.event.EventDispatcher</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addEventListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>on と同じ ...</div><div class='long'><p>on と同じ</p>\n</div></div></div><div id='method-clearEventListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-clearEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-clearEventListener' class='name expandable'>clearEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>type に登録されているリスナーを全てクリア ...</div><div class='long'><p>type に登録されているリスナーを全てクリア</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-dispatchEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>fire と同じ ...</div><div class='long'><p>fire と同じ</p>\n</div></div></div><div id='method-fire' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-fire' class='name expandable'>fire</a>( <span class='pre'>e</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベント起動 ...</div><div class='long'><p>イベント起動</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>type に登録されたイベントがあるかをチェック ...</div><div class='long'><p>type に登録されたイベントがあるかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-off' class='name expandable'>off</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>リスナーを削除 ...</div><div class='long'><p>リスナーを削除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-on' class='name expandable'>on</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベントリスナー追加 ...</div><div class='long'><p>イベントリスナー追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.event.EventDispatcher'>tm.event.EventDispatcher</span><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>off と同じ ...</div><div class='long'><p>off と同じ</p>\n</div></div></div></div></div></div></div>","mixins":[],"short_doc":"Event Dispatcher\n\nReference\n\n-(EventDispatcher - ActionScript 3.0 コンポーネントリファレンスガイド)[http://livedocs.adobe.com/flash/9...","autodetected":{},"meta":{},"subclasses":["tm.anim.Tween","tm.app.Element","tm.app.Timeline","tm.app.Tweener","tm.asset.Loader","tm.asset.MapSheet","tm.asset.SpriteSheet","tm.asset.Texture","tm.net.WebSocket","tm.sound.WebAudio","tm.util.Flow"],"files":[{"href":"eventdispatcher.html#tm-event-EventDispatcher","filename":"eventdispatcher.js"}],"tagname":"class","requires":[],"component":false,"members":[{"owner":"tm.event.EventDispatcher","meta":{"private":true},"tagname":"property","name":"_listeners","id":"property-_listeners"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"constructor","id":"method-constructor"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"addEventListener","id":"method-addEventListener"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"clearEventListener","id":"method-clearEventListener"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"dispatchEvent","id":"method-dispatchEvent"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"fire","id":"method-fire"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"hasEventListener","id":"method-hasEventListener"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"off","id":"method-off"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"on","id":"method-on"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"removeEventListener","id":"method-removeEventListener"}],"aliases":{},"uses":[],"mixedInto":[],"name":"tm.event.EventDispatcher","id":"class-tm.event.EventDispatcher","alternateClassNames":[],"parentMixins":[],"superclasses":[]});