new kursor({
    type: 4,
    removeDefaultCursor: true,
    color: '#FF0000'
})



$(document).ready(function () {
    $(document).mousemove(function () {
        if ($("a:hover").length != 0) {
            $(".kursor").addClass('kursor--link');
        } else {
            $(".kursor").removeClass('kursor--link');
        }
    });
});