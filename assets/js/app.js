// new kursor({
//     type: 4,
//     removeDefaultCursor: true,
//     color: '#FF0000'
// })



// $(document).ready(function () {
//     $(document).mousemove(function () {
//         if ($("a:hover").length != 0) {
//             $(".kursor").addClass('kursor--link');
//         } else {
//             $(".kursor").removeClass('kursor--link');
//         }
//     });
// });


window.onload = function () {
    heroHeight();
};

window.onresize = function () {
    // heroHeight();
};




function heroHeight() {
    // document.querySelector('.saigoii-hero').style.minHeight = window.innerHeight + 'px';
    document.querySelector('.sg-hero').style.minHeight = window.innerHeight + 'px';
}




(function ($, window, undefined) {
    $.fn.marqueeify = function (options) {
        var settings = $.extend({
            horizontal: true,
            vertical: true,
            speed: 1000, // In pixels per second
            container: $(this).parent(),
            bumpEdge: function () {}
        }, options);

        return this.each(function () {
            var containerWidth, containerHeight, elWidth, elHeight, move, getSizes,
                $el = $(this);

            getSizes = function () {
                containerWidth = window.innerWidth;
                containerHeight = window.innerHeight;
                elWidth = $el.outerWidth();
                elHeight = $el.outerHeight();
            };

            move = {
                right: function () {
                    $el.animate({
                        left: (containerWidth - elWidth)
                    }, {
                        duration: ((containerWidth / settings.speed) * 2000),
                        queue: false,
                        easing: "linear",
                        complete: function () {
                            settings.bumpEdge();
                            move.left();
                        }
                    });
                },
                left: function () {
                    $el.animate({
                        left: 0
                    }, {
                        duration: ((containerWidth / settings.speed) * 2000),
                        queue: false,
                        easing: "linear",
                        complete: function () {
                            settings.bumpEdge();
                            move.right();
                        }
                    });
                },
                down: function () {
                    $el.animate({
                        top: (containerHeight - elHeight)
                    }, {
                        duration: ((containerHeight / settings.speed) * 2000),
                        queue: false,
                        easing: "linear",
                        complete: function () {
                            settings.bumpEdge();
                            move.up();
                        }
                    });
                },
                up: function () {
                    $el.animate({
                        top: 0
                    }, {
                        duration: ((containerHeight / settings.speed) * 2000),
                        queue: false,
                        easing: "linear",
                        complete: function () {
                            settings.bumpEdge();
                            move.down();
                        }
                    });
                }
            };

            getSizes();

            if (settings.horizontal) {
                move.right();
            }
            if (settings.vertical) {
                move.down();
            }

            // Make that shit responsive!
            $(window).resize(function () {
                getSizes();
            });
        });
    };
})(jQuery, window);

var oldColor = '#ff00ff';


$(document).ready(function () {

    $('.marquee').marqueeify({
        speed: 300,
        bumpEdge: function () {
            // console.log(`old: ${oldColor}`);
            var colorList = ['#ff00ff', '#ff6f00', '#6f7f6f'];
            var newColor = colorList[Math.floor(Math.random() * colorList.length)];
            if (newColor == oldColor) {
                while (newColor == oldColor) {
                    var newColor = colorList[Math.floor(Math.random() * colorList.length)];
                }
                $('.marquee svg').css('fill', newColor);
            } else {
                $('.marquee svg').css('fill', newColor);

            }
            oldColor = newColor;
            // console.log(newColor);
        }
    });
});



$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});