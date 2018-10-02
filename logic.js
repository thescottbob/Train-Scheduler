window.onload = function() {
  $("#crazytrain").hide();
  $(".table").hide();
  $(".input-group").hide();
};

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

// Making variables to easily create and/or select particular HTML elements
var newRow = $("<tr></tr>");
var trainName = $("#trainName").val();
var trainDestination = $("#trainDestination").val();
var trainTime = $("#trainTime").val();
var trainFrequency = $("#trainFrequency").val();

$(document).ready(function() {
  // Run the following code when "Get Started" button is pressed
  $("#getStarted").on("click", function() {
    $(".table").show();
    $(".input-group").show();
    $("#crazytrain").get(0).play();
    $("#trainPic").hide();
    $("#getStarted").hide();
  });

  //When the Submit button is pressed
  $("#submit").on("click", function() {
      console.log("submit")
    //Grab the values of the userInput for the Train Name, Destination, First Train Time, and Frequency and append them to the appropriate ID's
    $("#table-dark").append(newRow);
    $("#trainName").append(trainName);
    $("#trainDestination").append(trainDestination);
    $("#trainTime").append(trainTime);
    $("#trainFrequency").append(trainFrequency);
  });
});
