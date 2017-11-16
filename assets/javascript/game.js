//Declare variables:

    $(document).ready(function(){

        //When page loads, set wins and losses to 0, and call newGame function.
        var wins = 0;
        var losses = 0;

        var gameMessage = ""

        //Adds udio element to page
        var audioClick = document.createElement("audio");
        audioClick.setAttribute("src", "assets/images/Fantasy-magical-sound-effect.mp3");
        newGame();

        function newGame(){
            console.log("New Game! Wins: " + wins + ", Losses: " + losses);
            
            $("#wins").text(wins);
            $("#losses").text(losses);
                                
            total = 0;
            $("#total").text(total);
            


        
            randomNumber =  Math.floor(Math.random() * 102) + 19;
            $("#randomNumber").text(randomNumber);
        
            crystal1Value = Math.floor(Math.random() * 12) + 1;
            crystal2Value = Math.floor(Math.random() * 12) + 1;
            crystal3Value = Math.floor(Math.random() * 12) + 1;
            crystal4Value = Math.floor(Math.random() * 12) + 1;
        
            console.log("Crystal1: " + crystal1Value + ", Crystal2: " + crystal2Value + ", Crystal3: " + crystal3Value + ", Crystal4: " + crystal4Value);                                                        
        
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

    //Selects all html elements with class = crystalImages and when clicked runs a call back function
        $(".crystalImages").on("click", function(){
                     
            $("#total").css("color", "#EFEFEF"); //Resets total font color and games message to nothing
            gameMessage = "";
            $(".gameMessage").text(gameMessage)
            
            //Sets the variable clickValue = to the randomly generated data-clickValue
            var clickValue = $(this).attr("data-clickValue");
            console.log("clickValue is: " + clickValue + "and the type of value is: " + typeof(clickValue));
            
            //Takes total and increases by the clickValue(converted to integer)
            total += parseInt(clickValue);

            //Updates the total on the screen with the new total value
            $("#total").text(total);

            console.log("The total is " + total);
            
            //Runs test to see if total has exceeded random number
            if (total < randomNumber){
                audioClick.play()
            
            } else if (total > randomNumber){
                gameMessage = "You Lost! Click a crystal to play again.";
                $(".gameMessage").text(gameMessage);
                //Add steps for a you lose message instead of alert
                ++losses;
                $("#total").css("color", "#A9A9A9");
                newGame();

            } else {
                gameMessage = "You Won! Click a crystal to play again.";
                $(".gameMessage").text(gameMessage)
                //Add steps for a you win message instead of alert
                ++wins;
                $("#total").css("color", "#A9A9A9");
                newGame();
            }
        });
  
});
   
//Crystal click sound license: “Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)”




