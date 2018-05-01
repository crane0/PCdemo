/**
 * Created by Crane on 2018/3/27.
 */
define(function(require, exports, module) {

    var index2 = 0;
    exports.inOutIndex = 0;

    var arrAnimation = require("./arrAnimation.js");
    var move = require("./move.js");


    exports.gun = function() {
        var content = document.querySelector('#content');
        var timer = '';
        var cLiNodes = document.querySelectorAll('#content > .list > li');

        if (content.addEventListener) {
            content.addEventListener('DOMMouseScroll', function (ev) {
                ev = ev || event;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn(ev);
                }, 200)
            })
        }
        content.onmousewheel = function (ev) {
            ev = ev || event;
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn(ev);
            }, 200)
        };

        function fn(ev) {
            var dir = '';

            if (ev.wheelDelta) {
                dir = ev.wheelDelta > 0 ? 'up' : 'down';
            } else if (ev.detail) {
                dir = ev.detail < 0 ? 'up' : 'down';
            }

            exports.inOutIndex = index2;
            switch (dir) {
                case 'up':
                    if (index2 > 0) {
                        index2--;
                        move.move(index2);
                    }

                    break;
                case 'down':
                    if (index2 < cLiNodes.length - 1) {
                        index2++;
                        move.move(index2);
                    }
                    break;
            }
        }
    }

    exports.headBind = function() {
        var liNodes = document.querySelectorAll('#head > .headMain > .nav >.list > li');
        var firstUp = liNodes[0].querySelector('.up');
        var arrow = document.querySelector('#head > .headMain > .arrow');
        var dotLis = document.querySelectorAll('#content > .dot > li');

        firstUp.style.width = '100%';
        arrow.style.left = liNodes[0].offsetLeft + liNodes[0].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';

        for (var i = 0; i < liNodes.length; i++) {
            liNodes[i].index = i;
            liNodes[i].onclick = function () {

                exports.inOutIndex = index2;

                move.move(this.index);
//                    变换赋值
                index2 = this.index;
            }
        }

        for (var i = 0; i < dotLis.length; i++) {
            dotLis[i].index = i;
            dotLis[i].onclick = function () {

                exports.inOutIndex = index2;
                move.move(this.index);
//                    变换赋值
                index2 = this.index;

            }
        }

    }

    exports.contentBind = function() {
        var content = document.querySelector('#content');
        var cLiNodes = document.querySelectorAll('#content > .list > li');
        var head = document.querySelector('#head');

        content.style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
        for (var i = 0; i < cLiNodes.length; i++) {
            cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight + 'px';
        }
    }

    exports.resize = function () {
        window.onresize = function () {
            contentBind();
            var cUl = document.querySelector('#content > .list');
            var arrow = document.querySelector('#head > .headMain > .arrow');
            var liNodes = document.querySelectorAll('#head > .headMain > .nav >.list > li');
            var head = document.querySelector('#head');

            cUl.style.top = -(document.documentElement.clientHeight - head.offsetHeight) * index2 + 'px';
            arrow.style.left = liNodes[index2].offsetLeft + liNodes[index2].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
        };
    }


})

