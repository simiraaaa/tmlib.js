Ext.data.JsonP.tm_input_Mouse({"tagname":"class","name":"tm.input.Mouse","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-tm.input.Mouse","members":{"cfg":[],"property":[{"name":"_x","tagname":"property","owner":"tm.input.Mouse","meta":{"private":true},"id":"property-_x"},{"name":"_y","tagname":"property","owner":"tm.input.Mouse","meta":{"private":true},"id":"property-_y"},{"name":"deltaPosition","tagname":"property","owner":"tm.input.Mouse","meta":{},"id":"property-deltaPosition"},{"name":"element","tagname":"property","owner":"tm.input.Mouse","meta":{},"id":"property-element"},{"name":"position","tagname":"property","owner":"tm.input.Mouse","meta":{},"id":"property-position"},{"name":"prevPosition","tagname":"property","owner":"tm.input.Mouse","meta":{},"id":"property-prevPosition"}],"method":[{"name":"constructor","tagname":"method","owner":"tm.input.Mouse","meta":{},"id":"method-constructor"},{"name":"_mousemove","tagname":"method","owner":"tm.input.Mouse","meta":{"private":true},"id":"method-_mousemove"},{"name":"_mousemoveNormal","tagname":"method","owner":"tm.input.Mouse","meta":{"private":true},"id":"method-_mousemoveNormal"},{"name":"_mousemoveScale","tagname":"method","owner":"tm.input.Mouse","meta":{"private":true},"id":"method-_mousemoveScale"},{"name":"getButton","tagname":"method","owner":"tm.input.Mouse","meta":{},"id":"method-getButton"},{"name":"getButtonDown","tagname":"method","owner":"tm.input.Mouse","meta":{},"id":"method-getButtonDown"},{"name":"getButtonUp","tagname":"method","owner":"tm.input.Mouse","meta":{},"id":"method-getButtonUp"},{"name":"run","tagname":"method","owner":"tm.input.Mouse","meta":{"chainable":true},"id":"method-run"},{"name":"update","tagname":"method","owner":"tm.input.Mouse","meta":{},"id":"method-update"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":10,"files":[{"filename":"mouse.js","href":"mouse.html#tm-input-Mouse"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/mouse.html#tm-input-Mouse' target='_blank'>mouse.js</a></div></pre><div class='doc-contents'><p>マウスクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_x' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-property-_x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-property-_x' class='name not-expandable'>_x</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-_y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-property-_y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-property-_y' class='name not-expandable'>_y</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-deltaPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-property-deltaPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-property-deltaPosition' class='name not-expandable'>deltaPosition</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-property-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-property-element' class='name not-expandable'>element</a><span> : Object</span></div><div class='description'><div class='short'><p>element</p>\n</div><div class='long'><p>element</p>\n</div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-property-position' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-property-position' class='name not-expandable'>position</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-prevPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-property-prevPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-property-prevPosition' class='name not-expandable'>prevPosition</a><span> : Object</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.input.Mouse-method-constructor' class='name expandable'>tm.input.Mouse</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.input.Mouse\" rel=\"tm.input.Mouse\" class=\"docClass\">tm.input.Mouse</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Mouse\" rel=\"tm.input.Mouse\" class=\"docClass\">tm.input.Mouse</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_mousemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-_mousemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-_mousemove' class='name expandable'>_mousemove</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_mousemoveNormal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-_mousemoveNormal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-_mousemoveNormal' class='name expandable'>_mousemoveNormal</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_mousemoveScale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-_mousemoveScale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-_mousemoveScale' class='name expandable'>_mousemoveScale</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getButton' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-getButton' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-getButton' class='name expandable'>getButton</a>( <span class='pre'>button</span> )</div><div class='description'><div class='short'>ボタン取得 ...</div><div class='long'><p>ボタン取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>button</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getButtonDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-getButtonDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-getButtonDown' class='name expandable'>getButtonDown</a>( <span class='pre'>button</span> )</div><div class='description'><div class='short'>ボタンダウン取得 ...</div><div class='long'><p>ボタンダウン取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>button</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getButtonUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-getButtonUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-getButtonUp' class='name expandable'>getButtonUp</a>( <span class='pre'>button</span> )</div><div class='description'><div class='short'>ボタンアップ取得 ...</div><div class='long'><p>ボタンアップ取得</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>button</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-run' class='name expandable'>run</a>( <span class='pre'>fps</span> ) : <a href=\"#!/api/tm.input.Mouse\" rel=\"tm.input.Mouse\" class=\"docClass\">tm.input.Mouse</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>run\n自動でマウス情報を更新したい際に使用する ...</div><div class='long'><p>run\n自動でマウス情報を更新したい際に使用する</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fps</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Mouse\" rel=\"tm.input.Mouse\" class=\"docClass\">tm.input.Mouse</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Mouse'>tm.input.Mouse</span><br/><a href='source/mouse.html#tm-input-Mouse-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Mouse-method-update' class='name expandable'>update</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>情報更新処理\nマイフレーム呼んで下さい. ...</div><div class='long'><p>情報更新処理\nマイフレーム呼んで下さい.</p>\n</div></div></div></div></div></div></div>"});