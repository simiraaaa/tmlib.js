module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');
  
  var banner = '\
/*\n\
 * tmlib.js <%= pkg.version %>\n\
 * http://github.com/phi-jp/tmlib.js\n\
 * MIT Licensed\n\
 * \n\
 * Copyright (C) 2010 phi, http://tmlife.net\n\
 */\n\
';

  var target = [
    "src/tmlib.js",

    "node_modules/high/src/object.js",
    "node_modules/high/src/array.js",
    "node_modules/high/src/date.js",
    "node_modules/high/src/function.js",
    "node_modules/high/src/math.js",
    "node_modules/high/src/number.js",
    "node_modules/high/src/string.js",

    "src/event/event.js",
    "src/event/eventdispatcher.js",
    
    "src/util/random.js",
    "src/util/ajax.js",
    "src/util/file.js",
    "src/util/timeline.js",
    "src/util/data.js",
    "src/util/querystring.js",
    "src/util/type.js",
    "src/util/flow.js",
    "src/util/gridsystem.js",

    "src/geom/vector2.js",
    "src/geom/vector3.js",
    "src/geom/matrix33.js",
    "src/geom/matrix44.js",
    "src/geom/rect.js",
    "src/geom/circle.js",

    "src/collision/collision.js",

    "src/dom/element.js",
    "src/dom/event.js",
    "src/dom/attr.js",
    "src/dom/style.js",
    "src/dom/anim.js",
    "src/dom/trans.js",
    "src/dom/data.js",

    "src/asset/manager.js",
    "src/asset/loader.js",
    "src/asset/texture.js",
    "src/asset/spritesheet.js",
    "src/asset/mapsheet.js",
    "src/asset/font.js",
    "src/asset/script.js",

    "src/input/keyboard.js",
    "src/input/mouse.js",
    "src/input/touch.js",
    "src/input/accelerometer.js",

    "src/graphics/color.js",
    "src/graphics/canvas.js",
    "src/graphics/bitmap.js",
    "src/graphics/filter.js",
    "src/graphics/gradient.js",

    "src/anim/tween.js",

    "src/app/timer.js",
    "src/app/updater.js",
    "src/app/baseapp.js",
    "src/app/element.js",
    "src/app/object2d.js",
    "src/app/grid.js",
    "src/app/scene.js",
    "src/app/collision.js",
    "src/app/tweener.js",
    "src/app/timeline.js",
    
    "src/display/canvasapp.js",
    "src/display/canvaselement.js",
    "src/display/sprite.js",
    "src/display/shape.js",
    "src/display/label.js",
    "src/display/animationsprite.js",
    "src/display/mapsprite.js",
    "src/display/renderer.js",
    "src/display/arrow.js",
    
    "src/ui/userinterface.js",
    "src/ui/button.js",
    "src/ui/menudialog.js",
    "src/ui/sketch.js",
    "src/ui/gauge.js",
    "src/ui/labelarea.js",

    "src/game/game.js",
    "src/game/titlescene.js",
    "src/game/resultscene.js",
    "src/game/loadingscene.js",
    "src/game/splashscene.js",
    "src/game/managerscene.js",
    "src/game/numericalinputscene.js",
    "src/game/countscene.js",
    
    "src/three/three.js",

    "src/sound/sound.js",
    "src/sound/webaudio.js",
    "src/sound/soundmanager.js",

    "src/social/twitter.js",
    "src/social/nineleap.js",

    "src/google/chart.js",

    "src/dirty.js",
  ];

  grunt.initConfig({
    pkg: pkg,
    buildDir: "build",

    concat: {
      tmlib: {
        src: target,
        dest: '<%= buildDir %>/tmlib.js',
        options: {
          banner: banner,
          process: true,
        }
      },
    },
    uglify: {
      tmlib: {
        options: {
          banner: banner,
        },
        files: {
          '<%= buildDir %>/tmlib.min.js': [ '<%= buildDir %>/tmlib.js' ]
        },
      },
    },
    less: {
      tmlib: {
        src: 'css/style.less',
        dest: 'css/style.css',
      }
    },
    shell: {
      docs: {
        command: 'jsduck ./src --output ./docs --title "tmlib.js docs" --eg-iframe=tm-iframe.html',
        options: {
            stdout: true,
            callback: function(err, stdout, stderr, cb) {
              console.log(err);
              console.log(stdout);
              console.log(stderr);
              console.log(cb);
            },
        },
      },
    }
  });

  for (var key in pkg.devDependencies) {
//    if (/grunt-contrib/.test(key)) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('docs', ['shell:docs']);
}














