
define(function(require, exports, module) {

    exports.picBoom = function () {
        var aboutUls = document.querySelectorAll('#content > .list > li:nth-child(4) > div > .about3 > div > ul');

        for (var i = 0; i < aboutUls.length; i++) {
            changeUl(aboutUls[i]);
        }

        function changeUl(uls) {
            var imgSrc = uls.dataset.src;

            var w = uls.offsetWidth / 2;
            var h = uls.offsetHeight / 2;

            for (var i = 0; i < 4; i++) {
                var lis = document.createElement('li');
                lis.style.width = w + 'px';
                lis.style.height = h + 'px';

                var img = document.createElement('img');
                img.src = imgSrc;

                /*
                 * 关于每张图片的位置
                 * left 0 top 0
                 * left -w top 0
                 * left 0 top -h
                 * left -w top -h
                 * */

                img.style.left = -w * (i % 2) + 'px';
                img.style.top = -h * Math.floor((i / 2)) + 'px';

                lis.appendChild(img);
                uls.appendChild(lis);
            }

            uls.onmouseenter = function () {

                var imgs = this.querySelectorAll('ul > li > img');

                imgs[0].style.top = h + 'px';
                imgs[1].style.left = -2 * w + 'px';
                imgs[2].style.left = w + 'px';
                imgs[3].style.top = -2 * h + 'px';
            };

            uls.onmouseleave = function () {

                var imgs = this.querySelectorAll('ul > li > img');
                imgs[0].style.top = 0 + 'px';
                imgs[1].style.left = -w + 'px';
                imgs[2].style.left = 0 + 'px';
                imgs[3].style.top = -h + 'px';
            }

        }
    }
})