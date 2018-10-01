window.onload = function() {
    $("#crazytrain").hide();
    $(".table").hide();
}

$(document).ready(function(){

    // Run the following code when "Get Started" button is pressed
    $("#getStarted").on("click", function(){
        $("#crazytrain").show();
        $(".table").show();
        $("#crazytrain").get(0).play();
        $("#trainPic").hide();
        $("#getStarted").hide();
    })   
});




