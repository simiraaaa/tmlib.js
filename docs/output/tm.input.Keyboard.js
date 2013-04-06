Ext.data.JsonP.tm_input_Keyboard({"tagname":"class","name":"tm.input.Keyboard","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.input.Keyboard","members":{"cfg":[],"property":[{"name":"element","tagname":"property","owner":"tm.input.Keyboard","meta":{},"id":"property-element"}],"method":[{"name":"getKey","tagname":"method","owner":"tm.input.Keyboard","meta":{},"id":"method-getKey"},{"name":"getKeyAngle","tagname":"method","owner":"tm.input.Keyboard","meta":{},"id":"method-getKeyAngle"},{"name":"getKeyDown","tagname":"method","owner":"tm.input.Keyboard","meta":{},"id":"method-getKeyDown"},{"name":"getKeyUp","tagname":"method","owner":"tm.input.Keyboard","meta":{},"id":"method-getKeyUp"},{"name":"init","tagname":"method","owner":"tm.input.Keyboard","meta":{},"id":"method-init"},{"name":"run","tagname":"method","owner":"tm.input.Keyboard","meta":{},"id":"method-run"},{"name":"update","tagname":"method","owner":"tm.input.Keyboard","meta":{"chainable":true},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":11,"files":[{"filename":"keyboard.js","href":"keyboard.html#tm-input-Keyboard"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/keyboard.html#tm-input-Keyboard' target='_blank'>keyboard.js</a></div></pre><div class='doc-contents'><p>キーボードクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-element' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-element' class='name not-expandable'>element</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>target element</p>\n</div><div class='long'><p>target element</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getKey' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKey' class='name expandable'>getKey</a>( <span class='pre'>key</span> ) : Boolean</div><div class='description'><div class='short'>キーを押しているかをチェック ...</div><div class='long'><p>キーを押しているかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>keyCode or keyName</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>チェック結果</p>\n</div></li></ul></div></div></div><div id='method-getKeyAngle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyAngle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyAngle' class='name expandable'>getKeyAngle</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>キーの方向を Angle(Degree) で取得 ...</div><div class='long'><p>キーの方向を Angle(Degree) で取得</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>角度(Degree)</p>\n</div></li></ul></div></div></div><div id='method-getKeyDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyDown' class='name expandable'>getKeyDown</a>( <span class='pre'>key</span> ) : Boolean</div><div class='description'><div class='short'>キーを押したかをチェック ...</div><div class='long'><p>キーを押したかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>keyCode or keyName</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>チェック結果</p>\n</div></li></ul></div></div></div><div id='method-getKeyUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyUp' class='name expandable'>getKeyUp</a>( <span class='pre'>key</span> ) : Boolean</div><div class='description'><div class='short'>キーを離したかをチェック ...</div><div class='long'><p>キーを離したかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a>/<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>keyCode or keyName</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>チェック結果</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-init' class='name expandable'>init</a>( <span class='pre'>element</span> )</div><div class='description'><div class='short'>@constructs\n@see         Test Program. ...</div><div class='long'><p>@constructs\n@see         <a href=\"http://tmlib-js.googlecode.com/svn/trunk/test/input/keyboard-test.html\">Test Program</a>.\n@example\nTM.loadScript(\"input\", \"keyboard\");</p>\n\n<p>TM.main(function() {</p>\n\n<pre><code>var k = TM.$Key(document);\nk.run();\nTM.setLoop(function(){\n    if (k.getKey('a')) { console.log(\"press 'a'!!\"); }\n});\n</code></pre>\n\n<p>});</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-run' class='name expandable'>run</a>( <span class='pre'>fps</span> )</div><div class='description'><div class='short'>run. ...</div><div class='long'><p>run.\n自動でマウス情報を更新したい際に使用する</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fps</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-update' class='name expandable'>update</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.input.Keyboard\" rel=\"tm.input.Keyboard\" class=\"docClass\">tm.input.Keyboard</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>情報更新処理\nマイフレーム呼んで下さい. ...</div><div class='long'><p>情報更新処理\nマイフレーム呼んで下さい.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Keyboard\" rel=\"tm.input.Keyboard\" class=\"docClass\">tm.input.Keyboard</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});