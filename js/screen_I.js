define(function(require, exports, module) {

    exports.home3D = function () {
        var h2Points = document.querySelectorAll('#content > .list > li:nth-child(1) > div > .home2 > li');
        var h1LiNodes = document.querySelectorAll('#content > .list > li:nth-child(1) > div > .home1 > li');
        var home1 = document.querySelector('#content > .list > li:nth-child(1) > div > .home1');
        var oldIndex = 0;
        var autoIndex = 0;
        var timer3D = '';

        for (var i = 0; i < h2Points.length; i++) {
            h2Points[i].index = i;
            h2Points[i].onclick = function () {
                for (var i = 0; i < h2Points.length; i++) {
                    h2Points[i].classList.remove('active');
                }
                this.classList.add('active');

                if (this.index > oldIndex) {
                    h1LiNodes[oldIndex].classList.remove('leftShow');
                    h1LiNodes[oldIndex].classList.remove('rightShow');
                    h1LiNodes[oldIndex].classList.remove('rightHide');
                    h1LiNodes[oldIndex].classList.add('leftHide');

                    h1LiNodes[this.index].classList.remove('leftHide');
                    h1LiNodes[this.index].classList.remove('leftShow');
                    h1LiNodes[this.index].classList.remove('rightHide');
                    h1LiNodes[this.index].classList.add('rightShow');
                } else if (this.index < oldIndex) {
                    h1LiNodes[this.index].classList.remove('leftShow');
                    h1LiNodes[oldIndex].classList.remove('leftHide');
                    h1LiNodes[oldIndex].classList.remove('rightShow');
                    h1LiNodes[oldIndex].classList.add('rightHide');

                    h1LiNodes[this.index].classList.remove('leftHide');
                    h1LiNodes[this.index].classList.remove('rightShow');
                    h1LiNodes[this.index].classList.remove('rightHide');
                    h1LiNodes[this.index].classList.add('leftShow');
                }
                oldIndex = this.index;
//                        手动同步自动
                autoIndex = this.index;
                move();
            }
        }

//                自动轮播
        move();
        function move() {
            clearInterval(timer3D);
            timer3D = setInterval(function () {
                autoIndex++;
                if (autoIndex >= h2Points.length) {
                    autoIndex = 0;
                }
                for (var i = 0; i < h2Points.length; i++) {
                    h2Points[i].classList.remove('active');
                }
                h2Points[autoIndex].classList.add('active');

                h1LiNodes[oldIndex].classList.remove('leftShow');
                h1LiNodes[oldIndex].classList.remove('rightShow');
                h1LiNodes[oldIndex].classList.remove('rightHide');
                h1LiNodes[oldIndex].classList.add('leftHide');

                h1LiNodes[autoIndex].classList.remove('leftHide');
                h1LiNodes[autoIndex].classList.remove('leftShow');
                h1LiNodes[autoIndex].classList.remove('rightHide');
                h1LiNodes[autoIndex].classList.add('rightShow');

//                        自动同步手动
                oldIndex = autoIndex;
            }, 2000)
        }

        home1.onmouseenter = function () {
            clearInterval(timer3D);
        };
        home1.onmouseleave = function () {
            move();
        }
    }
})