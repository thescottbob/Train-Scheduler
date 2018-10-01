window.onload = function() {
  $("#crazytrain").hide();
  $(".table").hide();
  $(".input-group").hide();
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAkiBlFWWPLC-idyOZfDHPR3GQQkyVOaNQ",
    authDomain: "crazytrain-e1f22.firebaseapp.com",
    databaseURL: "https://crazytrain-e1f22.firebaseio.com",
    projectId: "crazytrain-e1f22",
    storageBucket: "crazytrain-e1f22.appspot.com",
    messagingSenderId: "922265956555"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

$(document).ready(function() {
  // Run the following code when "Get Started" button is pressed
    $("#getStarted").on("click", function() {
    // $("#crazytrain").show();
    $(".table").show();
    $(".input-group").show();
    $("#crazytrain").get(0).play();
    $("#trainPic").hide();
    $("#getStarted").hide();
  });
});
