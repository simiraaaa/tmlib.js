/*
 * random.js
 */

tm.util = tm.util || {};


(function () {

    var MAX = 4294967295;
    var seed = ~~(Math.random() * MAX);
    var y = seed;

    //擬似乱数(符号付き32bit)
    function xor32() {
        y = y ^ (y << 13);
        y = y ^ (y >>> 17);
        return (y = (y ^ (y << 5)));
    }

    //0～0.9999....
    function random() {
        return (xor32() >>> 0) / MAX;
    }
    random.xor32 = xor32;

    /*
     * 新しいシードをセットする
     * シードは0以外の符号付き32bitの範囲なら何でも良い
     */
    random.accessor('seed', {
        set: function (newSeed) {y = seed = newSeed || 1;},
        get: function () { return seed;}
    });
    random.MAX = MAX;
    tm.util.Random = random;
    
    /**
     * @class tm.util.Random
     * ランダムクラス
     * 
     * ## Reference
     * - <http://www.python.jp/doc/2.5/lib/module-random.html>
     * - <http://www.yukun.info/blog/2008/06/python-random.html>
     * - <http://www.python-izm.com/contents/application/random.shtml>
     * - <http://libcinder.org/docs/v0.8.3/classcinder_1_1_rand.html>
     * - <http://libcinder.org/docs/v0.8.3/_rand_8h_source.html>
     */
    tm.util.Random.$extend({
        
        /**
         * Dummy
         */
        randint: function(min, max) {
            return window.Math.floor( Math.random()*(max-min+1) ) + min;
        },
        
        /**
         * Dummy
         */
        randfloat: function(min, max) {
            return window.Math.random()*(max-min)+min;
        },
        
        /**
         * Dummy
         */
        randbool: function() {
            return this.randint(0, 1) === 1;
        },
    });
    
})();
