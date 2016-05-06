$(document).ready(function() {
    var play=true;
    $(".game-space").on("click",function() {
        var empty = $(this).is(":empty");
        if (empty) {
            if(play === true) {
                $(this).html("<strong>X</strong>");
            } else {
                $(this).html("<strong>O</strong>");
            }
        }
    });
});
