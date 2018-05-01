/**
 * Created by Crane on 2018/3/27.
 */
define(function(require, exports, module) {

    var arrAnimation = require('./arrAnimation');
    var h = require('./head');

    exports.move = function (index) {
        var upNodes = document.querySelectorAll('#head > .headMain > .nav >.list > li .up');
        var dotLis = document.querySelectorAll('#content > .dot > li');
        var arrow = document.querySelector('#head > .headMain > .arrow');
        var cUl = document.querySelector('#content > .list');
        var head = document.querySelector('#head');
        var liNodes = document.querySelectorAll('#head > .headMain > .nav >.list > li');

        for (var i = 0; i < upNodes.length; i++) {
            upNodes[i].style.width = '';
            dotLis[i].className = '';
        }
        upNodes[index].style.width = '100%';
        arrow.style.left = liNodes[index].offsetLeft + liNodes[index].offsetWidth / 2 - arrow.offsetWidth / 2 + 'px';
        cUl.style.top = -(document.documentElement.clientHeight - head.offsetHeight) * index + 'px';

        dotLis[index].className = 'active';

        if (arrAnimation.arrAnimation[index] && typeof arrAnimation.arrAnimation[index].inAction === 'function') {
            arrAnimation.arrAnimation[index].inAction();
        }
        if (arrAnimation.arrAnimation[h.inOutIndex] && typeof arrAnimation.arrAnimation[h.inOutIndex].outAction === 'function') {
            arrAnimation.arrAnimation[h.inOutIndex].outAction();
        }
    }

})