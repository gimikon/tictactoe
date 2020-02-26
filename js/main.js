let array = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = true;
let gameOver = false;
let isGameReset = false;
let choiceOfChange1;

let color = {

 red: '<img src="imges/macaron-red.png">',
 green: '<img src="imges/macaron-green.png">',
 yellow: '<img src="imges/macaron-yellow.png">',
 purple: '<img src="imges/macaron-purple.png">',
 pink:'<img src="imges/macaron-pink.png">'
};

let buttonColor = {
  purple:"#b19cd9",
  yellow:"#fdfd96",
  green:"#77dd77",
  red:"#ff6961",
  pink:"pink"

};

$(document).ready(function() {

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
            // isGameReset = false;

            // $(".box").html('<img src ="imges/cloud1.png">')
            $("#turn").text("You are winner !!");
            $(".box").addClass("swing");
            console.log("I win");
          }
        }
      }
    }
    if (!array.includes("")) {
      $("#turn").text("The game is draw");
      $("#turn").css("background-color","#aec6cf")

      // $(".box").html('<img src ="imges/cloud1.png">')
      console.log("draw");
    }
  };


  const disenabled = function(){
    if ( !gameOver && !isGameReset ){
      $('#turn').prop('disabled', true)
    } else {
      $('#turn').prop('disabled', false)
    }
  }


  $("#turn").click(function() {
    if ( choiceOfChange1 === undefined ){
      return;
    };

    $("#turn").text("It is your turn");

    isGameReset = false;
    disenabled();


    $(".box").on("click", function() {

      if (!gameOver && !isGameReset) {
        const i = this.id;
        if (array[i] === "") {
          if (currentPlayer === true) {
            $(`#${i}`).html(choiceOfChange1);
            array[i] = "x";
            $("#turn").text("It is your turn");
            $("#turn").css("background-color",choiceOfBackground)

          } else {
            $(`#${i}`).html(color.pink);
            $("#turn").css("background-color",buttonColor.pink)


            array[i] = "o";
            $("#turn").text("It is my trun");
          }
          checkWinner();
          currentPlayer = !currentPlayer;
        }
      }
    });
  });

  $("#reset").click(function() {
    currentPlayer = true;
    isGameReset = true;
    gameOver = false;
    const button = $(".box");
    button.html("");
    $("#turn").text("♡Let's start♡");
    $("#turn").css("background-color","pink")
    array = ["", "", "", "", "", "", "", "", ""];
    disenabled();

  });


$(".choice").on('click', function(){
  let colorChoice = $(this).attr('id')
  choiceOfChange1 = color[colorChoice]
  choiceOfBackground = buttonColor[colorChoice]
  $("#turn").css("background-color",choiceOfBackground)
})







});
