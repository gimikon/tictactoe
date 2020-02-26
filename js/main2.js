let array = ["","","","","","","","",""];
let player1 = true;
let gameover = false;
let gameReset = false;

$(document).ready(function() {

const winningConditions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8]
];

const checkWinner = function(){
 for (let i = 0; i < winningConditions.length; i++){
   const current = array[winningConditions][i][0];
   if( current != "") {
     if ( current === array[winningConditions][i][1]){
       if (current === array[winningConditions][i][2]){
         gameOver = true;
         gameReset = false;
         $("#turn").text("I win !!");
         console.log("I win");

       }
     }
   }
 }
 if (!array.include("")){
   $("#turn").text("The game is draw");
   console.log("The game is draw!!!")
 }
};

// for the first time of the game and no reset button happened
$("#turn").click(function(){
  if ( gameReset === false ) {
    $("#turn").text("It is your turn");
    $('.box').on('click',function(){
      const i = this.id;
      if(array[i] === "") {
        if(player1 === true){
          $(`#${i}`).html('<img src="imges/macaron-red.png">');
          array[i] = "x";
          $("#turn").text("It is my turn");
          checkWinner();
        } else {
          $(`#${i}`).html('<img src="imges/macaron-green.png">');
          array[i] = "o";
          $("#turn").text("It is your trun");
          checkWinner();

        }
        player1 =! player1
      }
    })
///after reset happened
} else {
  $("#turn").text("It is your turn");
  $('.box').on('click',function(){
    const i = this.id;
    if(array[i] === "") {
      if(player1 === true){
        (`#${i}`).html('<img src="imges/macaron-red.png">');
        array[i] = "x";
        $("#turn").text("It is my turn");
        checkWinner();
      } else {
        $(`#${i}`).html('<img src="imges/macaron-green.png">');
        array[i] = "o";
        $("#turn").text("It is your trun");
        checkWinner();

      }
      player1 =! player1
    }
  })
}

});


$("#reset").click(function(){
  gameReset = true;
  gameOver = false;
  const button = $(".box");
  button.html("");
  $("#turn").text("♡Let's start♡");
  array = ["", "", "", "", "", "", "", "", ""];
});

});
