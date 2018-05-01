define(function(require, exports, module) {

    var home3D = require('./screen_I');

    exports.openAnimation = function () {
        var openDivs = document.querySelectorAll('#open > div');
        var open = document.querySelector('#open');

        var arr = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'about1.jpg', 'about2.jpg', 'about3.jpg', 'about4.jpg', 'worksimg1.jpg', 'worksimg2.jpg', 'worksimg3.jpg', 'worksimg4.jpg', 'team.png', 'greenLine.png'];

        for (var i = 0; i < arr.length; i++) {
            var imgs = new Image();
            var flag = 0;
            imgs.src = 'img/' + arr[i];

            imgs.onload = function () {
                flag++;
                openDivs[2].style.width = flag / arr.length * 100 + '%';
            }
        }

        openDivs[2].addEventListener('transitionend', function () {
            if (flag == arr.length) {
                for (var i = 0; i < openDivs.length; i++) {
                    openDivs[i].style.height = 0;
                }
            }
        });

        openDivs[0].addEventListener('transitionend', function () {
            open.remove();
            // audio.play();
            home3D.home3D();
        })
    }
})