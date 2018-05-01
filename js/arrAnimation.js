/**
 * Created by Crane on 2018/3/27.
 */
define(function(require, exports, module) {

    var arrAnimation = [
//                1
        {
            inAction: function () {
                var home1 = document.querySelector('#content > .list > li:nth-child(1) > div > .home1');
                var home2 = document.querySelector('#content > .list > li:nth-child(1) > div > .home2');

                home1.style.transform = 'translateY(0px)';
                home2.style.transform = 'translateY(0px)';

                home1.style.opacity = 1;
                home2.style.opacity = 1;
            },
            outAction: function () {
                var home1 = document.querySelector('#content > .list > li:nth-child(1) > div > .home1');
                var home2 = document.querySelector('#content > .list > li:nth-child(1) > div > .home2');

                home1.style.transform = 'translateY(-400px)';
                home2.style.transform = 'translateY(100px)';

                home1.style.opacity = 0;
                home2.style.opacity = 0;

            }

        },
//                2
        {
            inAction: function () {
                var plane1 = document.querySelector('#content > .list > li:nth-child(2) > .plane > .plane1');
                var plane2 = document.querySelector('#content > .list > li:nth-child(2) > .plane > .plane2');
                var plane3 = document.querySelector('#content > .list > li:nth-child(2) > .plane > .plane3');

                plane1.style.transform = 'translate(0px,0px)';
                plane2.style.transform = 'translate(0px,0px)';
                plane3.style.transform = 'translate(0px,0px)';
            },
            outAction: function () {
                var plane1 = document.querySelector('#content > .list > li:nth-child(2) > .plane > .plane1');
                var plane2 = document.querySelector('#content > .list > li:nth-child(2) > .plane > .plane2');
                var plane3 = document.querySelector('#content > .list > li:nth-child(2) > .plane > .plane3');

                plane1.style.transform = 'translate(-200px,-200px)';
                plane2.style.transform = 'translate(200px,200px)';
                plane3.style.transform = 'translate(200px,-200px)';
            }
        },
//                3
        {
            inAction: function () {
                var pencil1 = document.querySelector('#content > .list > li:nth-child(3) > .pencil > .pencil1');
                var pencil2 = document.querySelector('#content > .list > li:nth-child(3) > .pencil > .pencil2');
                var pencil3 = document.querySelector('#content > .list > li:nth-child(3) > .pencil > .pencil3');

                pencil1.style.transform = 'translateY(0px)';
                pencil2.style.transform = 'translateY(0px)';
                pencil3.style.transform = 'translateY(0px)';
            },
            outAction: function () {
                var pencil1 = document.querySelector('#content > .list > li:nth-child(3) > .pencil > .pencil1');
                var pencil2 = document.querySelector('#content > .list > li:nth-child(3) > .pencil > .pencil2');
                var pencil3 = document.querySelector('#content > .list > li:nth-child(3) > .pencil > .pencil3');

                pencil1.style.transform = 'translateY(-100px)';
                pencil2.style.transform = 'translateY(100px)';
                pencil3.style.transform = 'translateY(100px)';
            }
        },
//                4
        {
            inAction: function () {
                var spider1 = document.querySelector('#content > .list > li:nth-child(4) > div > .about3 > div:nth-child(1)');
                var spider2 = document.querySelector('#content > .list > li:nth-child(4) > div > .about3 > div:nth-child(2)');

                spider1.style.transform = 'rotate(0deg)';
                spider2.style.transform = 'rotate(0deg)';

            },
            outAction: function () {
                var spider1 = document.querySelector('#content > .list > li:nth-child(4) > div > .about3 > div:nth-child(1)');
                var spider2 = document.querySelector('#content > .list > li:nth-child(4) > div > .about3 > div:nth-child(2)');

                spider1.style.transform = 'rotate(30deg)';
                spider2.style.transform = 'rotate(-30deg)';
            }
        },
//                5
        {
            inAction: function () {
                var team1 = document.querySelector('#content > .list > li:nth-child(5) > div > .team1');
                var team2 = document.querySelector('#content > .list > li:nth-child(5) > div > .team2');

                team1.style.transform = 'translateX(0px)';
                team2.style.transform = 'translateX(0px)';

            },
            outAction: function () {
                var team1 = document.querySelector('#content > .list > li:nth-child(5) > div > .team1');
                var team2 = document.querySelector('#content > .list > li:nth-child(5) > div > .team2');

                team1.style.transform = 'translateX(-200px)';
                team2.style.transform = 'translateX(200px)';
            }
        }
    ];

    exports.arrAnimation = arrAnimation;

    exports.inOut = function() {
        for (var i = 0; i < arrAnimation.length; i++) {
            arrAnimation[i].outAction();
        }
        setTimeout(function () {
            arrAnimation[0].inAction();
        }, 2000);
    }
})