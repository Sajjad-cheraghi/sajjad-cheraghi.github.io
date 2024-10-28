$(document).ready(function () {
    $(".modal").hide();
    
    $("#close-modal").click(function () {
        $(".modal").hide("slow");
        $(".modal-content").html("");
    })
    


    $("body").on("click", ".link", function () {
        $(".modal>.header>h2").html($(this).attr("title"))
        var url = $(this).attr("url")
        $(".modal").show("slow");

        $.ajax({
            url: url,
            type: 'GET',
            success: function (data) {
                $(".modal-content").html(data);

            },
            error: function () {
                $(".modal-content").html("no information");
            }

        });

    })


});