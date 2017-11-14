// Generates a random value beween 1 and 12, and assign to a variable
var crystal1Value = Math.floor(Math.random() * 12) + 1;
var crystal2Value = Math.floor(Math.random() * 12) + 1;
var crystal3Value = Math.floor(Math.random() * 12) + 1;
var crystal4Value = Math.floor(Math.random() * 12) + 1;

//Method 1:
// $("#crystal1").value(crystal1Value);

//Method 2:  Selects html element with corresponding id name and assigns an attribute called clickValue = to crystal value number
$("#crystal2").attr("data-clickValue", crystal2Value);

//Selects all html elements with class = crystalImages and when clicked runs a call back function

$(".crystalImages").on("click", function() {
    
    //Method 1: set clickValue = to he value of image
    // var clickValue = (this.value);

    //Method 2: set clickValue = to he value of image

    var clickValue = $(this).attr("data-clickValue");
    
    console.log("clickValue is: " + clickValue);

    total += parseInt(clickValue);
}