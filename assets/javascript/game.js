//Declare variables:

    $(document).ready(function(){

        //When page loads, set wins and losses to 0, make gameMessage blank, and call newGame function.
        var wins = 0;
        var losses = 0;

        var gameMessage = ""

        //Adds audio element to page
        var audioClick = document.createElement("audio");
        audioClick.setAttribute("src", "assets/images/Fantasy-magical-sound-effect.mp3");
        
        newGame();
        //Defines newGame function: 
        function newGame(){
            console.log("New Game! Wins: " + wins + ", Losses: " + losses);
            
            $("#wins").text(wins);
            $("#losses").text(losses);
                                
            total = 0;
            $("#total").text(total);
            
            //Generates random number 12 - 120
            randomNumber =  Math.floor(Math.random() * 102) + 19;
            $("#randomNumber").text(randomNumber);
        
            //Generates random number 1 - 12
            crystal1Value = Math.floor(Math.random() * 12) + 1;
            crystal2Value = Math.floor(Math.random() * 12) + 1;
            crystal3Value = Math.floor(Math.random() * 12) + 1;
            crystal4Value = Math.floor(Math.random() * 12) + 1;
                                        
        
            //Selects html element with corresponing id names and assigns an attribute called clickValue
            // with value = to crystal#value
            $("#crystal1").attr("data-clickValue", crystal1Value);
            $("#crystal2").attr("data-clickValue", crystal2Value);
            $("#crystal3").attr("data-clickValue", crystal3Value);
            $("#crystal4").attr("data-clickValue", crystal4Value);
        
            console.log("Data click values: Crystal 1: " + $("#crystal1").attr("data-clickValue")
            + ", Crystal 2: " + $("#crystal2").attr("data-clickValue") +  
            ", Crystal 3: " + $("#crystal3").attr("data-clickValue") + ", Crystal 4: " + 
            $("#crystal4").attr("data-clickValue"));
        };

    //Selects all html elements with class = crystalImages and when clicked runs anonymous call back function
        $(".crystalImages").on("click", function(){
           
            audioClick.play() //Plays sound

           //Resets total font color and game message to nothing
            $("#total").css("color", "#EFEFEF"); 
            gameMessage = "";
            $(".gameMessage").text(gameMessage)
            
            //Sets the variable clickValue = to the randomly generated data-clickValue
            var clickValue = $(this).attr("data-clickValue");
            
            //Takes total and increases by the clickValue(converted to integer)
            total += parseInt(clickValue);

            //Updates the total on the screen with the new total value
            $("#total").text(total);

            console.log("The total is " + total);
            
            //Runs test to see if total has exceeded random number
            if (total > randomNumber){
                gameMessage = "You went over " + randomNumber + "! Click a crystal to play again.";
                $(".gameMessage").text(gameMessage);
                ++losses;
                $("#total").css("color", "#A9A9A9");
                newGame(); //Calls newGame function

            } else if (total === randomNumber) {
                gameMessage = "You matched " + randomNumber + "! Click a crystal to play again.";
                $(".gameMessage").text(gameMessage);
                ++wins;
                $("#total").css("color", "#A9A9A9");
                newGame(); //Calls newGame function
            }
        });
  
});
   
//Crystal click sound license: “Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)”




