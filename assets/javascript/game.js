//Declare variables:

    //Random number 19-120 to be guessed.
    var randomNumber =  Math.floor(Math.random() * 102) + 19;
    
    $("#randomNumber").text(randomNumber);

    //Users total
    var total = 0;
    $("#total").text(total);

    //Selects html element with id = wins, and sets the text equal to value of variable  wins
    var wins = 0;
    $("#wins").text(wins);

    //Selects html element with id = losses, and sets the text equal to value of variable losses
    var losses = 0;
    $("#losses").text(losses);

    // //Generates a random value beween 1 and 12, and assigns to variable
    var crystal1Value = Math.floor(Math.random() * 12) + 1;
    var crystal2Value = Math.floor(Math.random() * 12) + 1;
    var crystal3Value = Math.floor(Math.random() * 12) + 1;
    var crystal4Value = Math.floor(Math.random() * 12) + 1;

    console.log("Crystal1: " + crystal1Value); 
    console.log("Crystal2: " + crystal2Value); 
    console.log("Crystal3: " + crystal3Value); 
    console.log("Crystal4: " + crystal4Value); 

    // console.log("Crystal 1 has a value of: " + crystal1 + " and the type of value is " + typeof crystal1);

    //Selects html element with corresponing id names and assigns an attribute called clickValue with value = to crystal1
    // $("#crystal1").attr("data-clickValue", crystal1Value);
    // $("#crystal2").attr("data-clickValue", crystal2Value);
    // $("#crystal3").attr("data-clickValue", crystal3Value);
    // $("#crystal4").attr("data-clickValue", crystal4Value);
   


    //Selects all html elements with class = crystalImages and when clicked runs a call back function
    $("#crystal1").on("click", function() {
  
        total += crystal1Value;
        $("#total").text(total);

        console.log("The total is " + total);
    
        if (total === randomNumber){
            alert("You win!");
        } else if (total > randomNumber){
            alert("You Lose")
        }
    });

    $("#crystal2").on("click", function() {
    
        total += crystal2Value;
        $("#total").text(total);

        console.log("The total is " + total);
    
        if (total === randomNumber){
            alert("You win!");
        } else if (total > randomNumber){
            alert("You Lose")
        }
    });

    $("#crystal3").on("click", function() {
    
            total += crystal3Value;
            $("#total").text(total);
    
            console.log("The total is " + total);
        
            if (total === randomNumber){
                alert("You win!");
            } else if (total > randomNumber){
                alert("You Lose")
            }
        });

    $("#crystal4").on("click", function() {
    
            total += crystal4Value;
            $("#total").text(total);
    
            console.log("The total is " + total);
        
            if (total === randomNumber){
                alert("You win!");
            } else if (total > randomNumber){
                alert("You Lose")
            }
        });


    //When page starts up:
    //Generates a random number = (19 -120)
    //Sets HTML ransom number span = random number value
    //Sets total = 0
    //Sets HTML total = total value
    //Assigns value to each crystal (1 - 12)
        
//When a crystal is clicked
    //Total increases by value number
    //Sets HTML total = total value
      
    //After each click, runs a test:
        //if total number = random number: end game/restart
        //if total number > random number: end game/restart





