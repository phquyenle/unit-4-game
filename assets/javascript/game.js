$(document).ready(function() {
    var numbergenerator= Math.floor(Math.random()*102)+19;
console.log("numbergenerator:" + numbergenerator);
$(".RNG").html(numbergenerator);

// set up variables for the game 
var wins = 0;
var losses = 0;
var score = 0;

//getting random number for 4 gems
//random number between 1-12

var gemOne= Math.floor(Math.random()*12)+1;
$("#gem1").html("<img src=" + "assets/images/gem1.png" + " value=" + gemOne + ">");
 console.log("Gem 1: " + gemOne);

 var gemTwo= Math.floor(Math.random()*12)+1;
 $("#gem2").html("<img src=" + "assets/images/gem2.png" + " value=" + gemTwo + ">");
  console.log("Gem 2: " + gemTwo);

  var gemThree= Math.floor(Math.random()*12)+1;
$("#gem3").html("<img src=" + "assets/images/gem3.png" + " value=" + gemThree + ">");
 console.log("Gem 3: " + gemThree);

 var gemFour= Math.floor(Math.random()*12)+1;
$("#gem4").html("<img src=" + "assets/images/gem4.png" + " value=" + gemFour + ">");
 console.log("Gem 4: " + gemFour);
// added the onclick for gems so when you clicked on it, a new score will be added to the your score
 $("img").on("click", function () {
    var newScore = score += parseInt($(this).attr("value")); 
        console.log("New Score: " + newScore); 
    $(".actualscore").html(newScore); 

    if(newScore === numbergenerator) { 
        wins++ ; 
        $(".wins").html("Wins: " + wins); 
            console.log("Wins: " + wins); 
            reset(); 
    } 

    else if(newScore > numbergenerator) {
        losses++ ; 
        $(".losses").html("Losses: " + losses); 
            console.log("Losses: " + losses); 
            reset(); 
    }

}); 




})