/*
 * shakesensor.js
 */

!function (tm, undefined) {
    var Math = tm.global.Math;
    //tm.input.ShakeSensor
    tm.define('tm.input.ShakeSensor', {
        superClass: "tm.event.EventDispatcher",

        accelerometer: null,
        gravity: null,

        temp: null,
        parent: null,

        xList: null,
        yList: null,
        zList: null,

        // この値を超えると振ったことになる
        // 重力加速度を9.8と考えると何Gかかってるかで9.8*Gで計算できる
        threshold: 3 * 9.8,

        //振る速さ制限
        time: 10,

        _g: 3,

        init: function (accelerometer) {
            this.superInit();
            this.accelerometer = accelerometer || tm.input.Accelerometer();
            this.gravity = this.accelerometer.gravity;

            this.xList = [];
            this.yList = [];
            this.zList = [];

            this.shaking = {
                x: false,
                y: false,
                z: false,
            };
        },

        //xyzどれかが振られた
        isShaking: function () {
            var s = this.shaking;
            return s.x || s.y || s.z;
        },

        //xが振られた
        isShakingX: function () {
            return this.shaking.x;
        },
        //yが振られた
        isShakingY: function () {
            return this.shaking.y;
        },
        //zが振られた
        isShakingZ: function () {
            return this.shaking.z;
        },

        update: function (e) {
            return this
            .updateList('x')
            .updateList('y')
            .updateList('z');
        },

        setTime: function (time) {
            this.time = time;
            return this;
        },

        setThreshold: function (threshold) {
            this.threshold = threshold;
            return this;
        },

        //何Gかかってるかで threshold をセット
        setThresholdByGravity: function (g) {
            this._g = g;
            return this.setThreshold(g * 9.8);
        },

        // static
        updateList: function (direction) {
            var list = this[direction + 'List'];
            var now = this.gravity[direction];
            list.push(now);
            var len = list.length;
            if (len === 1) return this;
            if (len > this.time) {
                list.shift();
                --len;
            }
            var v = Math.abs(list[0] - list[len - 1]);
            v = this.shaking[direction] = (v > this.threshold);
            if (v) {
                list.length = 0;
                list.push(now);
            }
            return this;
        },

        //sceneのonenterframeイベントにupdateを引っ付ける
        addChildTo: function (scene) {
            this.parent = scene;
            var self = this;
            scene.on('enterframe', this.temp = function (e) { self.update(e); });
            return this;
        },

        //sceneのonenterframeから削除
        remove: function () {
            this.parent && this.parent.off(this.temp);
            return this;
        },

    }).prototype.accessor('g', {
        get: function () { return this._g; },
        set: tm.input.Shake.prototype.setThresholdByGravity,
    });

}(tm);