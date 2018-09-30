window.onload = function() {
    $("#crazytrain").hide();
    $(".table").hide();
}

$(document).ready(function(){

    // Make 'Crazy Train' play when "Get Started" button is pressed
    $("#getStarted").on("click", function(){
        $(".table").show();
        $("#crazytrain").get(0).play();
        $("#trainPic").hide();
        $("#getStarted").hide();
    })   
});




