let array = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = true;
let gameOver = false;
let isGameReset = false;

const red = '<img src="imges/macaron-red.png">'
const green = '<img src="imges/macaron-red.png">'
const purple = '<img src="imges/macaron-purple.png">'
const yellow = '<img src="imges/macaron-yellow.png">'

const x = red
const y = green
const z = purple
const a = yellow

$(document).ready(function() {
  // const decidePlayer = function() {
  //   if (Math.random() > 0.5) {
  //     currentPlayer = true;
  //   } else {
  //     currentPlayer = false;
  //   }
  // };

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  const checkWinner = function() {
    for (let i = 0; i < winningConditions.length; i++) {
      const current = array[winningConditions[i][0]];
      if (current !== "") {
        if (current === array[winningConditions[i][1]]) {
          if (current === array[winningConditions[i][2]]) {
            gameOver = true;
            isGameReset = false;
            $(".box").html('<img src ="imges/cloud1.png">')
            $("#turn").text("I win !!");
            console.log("I win");
          }
        }
      }
    }
    if (!array.includes("")) {
      $("#turn").text("The game is draw");
      $(".box").html('<img src ="imges/cloud1.png">')
      console.log("draw");
    }
  };

  ///Game start////
  // 1 . if turn button is clicked, it will tell you who should play
  // 2.  randomly choose who should play first ex.. you or me ?
  // 3.  game starts start clicking the button every time player1 you click the button, img pops up
  // 4. and next turn will start, everytime second player clicks, the img pops up





  const disenabled = function(){
    if ( !gameOver && !isGameReset ){
      $('#turn').prop('disabled', true)
    } else {
      $('#turn').prop('disabled', false)
    }
  }


  $("#turn").click(function() {
    $("#turn").text("It is your turn");

    console.log({ isGameReset, gameOver });
    isGameReset = false;
    disenabled();
    $("#turn").text("It is your turn");
    $(".box").on("click", function() {
      if (!gameOver && !isGameReset) {
        const i = this.id;
        if (array[i] === "") {
          if (currentPlayer === true) {
            $(`#${i}`).html(x);
            array[i] = "x";
            $("#turn").text("It is my trun");
          } else {
            $(`#${i}`).html('<img src="imges/macaron-green.png">');
            array[i] = "o";
            $("#turn").text("It is your trun");
          }
          checkWinner();
          currentPlayer = !currentPlayer;
        }
      }
    });
  });

  $("#reset").click(function() {

    isGameReset = true;
    gameOver = false;
    const button = $(".box");
    button.html("");
    $("#turn").text("♡Let's start♡");
    array = ["", "", "", "", "", "", "", "", ""];
    disenabled();

  });







});
