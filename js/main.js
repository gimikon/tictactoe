////the initial setting ///////////
let array = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = true;
let gameOver = false;
let isGameReset = false;
let choiceOfChange1;
let choiceOfChange2;
let colorChoice;
let randomColorChoice;
let yourScore = 0;
let myScore = 0;

let colorButtonSet = false;

let color = {
  red: '<img src="imges/macaron-red.png">',
  green: '<img src="imges/macaron-green.png">',
  yellow: '<img src="imges/macaron-yellow.png">',
  purple: '<img src="imges/macaron-purple.png">',
  pink: '<img src="imges/macaron-pink.png">'
};

let buttonColor = {
  red: "#ff9994",
  green: "#77dd77",
  yellow: "#fdfd96",
  purple: "#b19cd9",
  pink: "#ffb9ca"
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

  ///////end //////////

  ///////check if the winning conditions are met or the game is draw//////////
  const checkWinner = function() {
    for (let i = 0; i < winningConditions.length; i++) {
      const current = array[winningConditions[i][0]];
      if (current !== "") {
        if (current === array[winningConditions[i][1]]) {
          if (current === array[winningConditions[i][2]]) {
            gameOver = true;


            if (current.includes("x")){
              $("#turn").text("You are the winner !!");
              yourScore++
              $("#yourscore").text(yourScore)
            } else {
              $("#turn").text("I am  the winner !!");
              myScore++
              $("#myscore").text(myScore)
            }
            setTimeout(function(){
              $(".box")
              .html('<img src ="imges/cloud1.png">')
            },1500);
            return
          }
        }
      }
    }
    
    if (!array.includes("")) {
      $("#turn").text("The game is draw");
      $("#turn").css("background-color", "#aec6cf")
      setTimeout(function(){
        $(".box")
        .html('<img src ="imges/cloud1.png">')
      },1500);
    }
  };

  ///////end //////////

  /////lets start button will be disenabled /////////
  const disenabled = function() {
    if (!gameOver && !isGameReset) {
      $("#turn").prop("disabled", true);
    } else {
      $("#turn").prop("disabled", false);
    }
  };

  ///////end //////////

  //////the game starts//////////////////////////

  // /if the button color not is pressed the game does not run /
  $("#turn").click(function() {
    if (!colorButtonSet) {
      $("#error").text("♡Please select your macaron♡");
      return;
    }
    ////if the button color is pressed, the game starts from here ////////////

    $("#turn").text("The Game Started");
    $("#turn").css("background-color","gray");


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
            $("#turn").css("background-color", choiceOfBackground1);
          } else {
            $(`#${i}`).html(choiceOfChange2);
            $("#turn").css("background-color", choiceOfColorBackground2);
            array[i] = "o";
            $("#turn").text("It is my trun");
          }
          checkWinner();
          currentPlayer = !currentPlayer;
        }
      }
    });
  });

  ///////end //////////

  ////the reset button ///////////////////

  $("#reset").click(function() {
    colorButtonSet = false;
    currentPlayer = true;
    isGameReset = true;
    gameOver = false;
    const button = $(".box");
    button.html("");
    $("#turn").text("♡Let's start♡");
    $("#turn").css("background-color", "pink");
    array = ["", "", "", "", "", "", "", "", ""];
    disenabled();
  });

  ///////end //////////

  /////the color choice button, if the color is chosen, the game can run because of colorButtonSet ///////////
  $(".choice").on("click", function() {
    colorChoice = $(this).attr("id");
    $("#error").text(" ");
    colorButtonSet = true;
    choiceOfChange1 = color[colorChoice];
    choiceOfBackground1 = buttonColor[colorChoice];
    $("#turn").css("background-color", choiceOfBackground1);
    randomColor();
  });

  ///////end //////////

  /////the second player will have random macaron color except for the one that is picked ///////
  const randomColor = function() {
    randomColorChoice = Object.keys(color)[
      Math.floor(Math.random() * Object.keys(color).length)
    ];

    while (colorChoice === randomColorChoice) {
      randomColorChoice = Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ];
    }

    choiceOfChange2 = color[randomColorChoice];
    choiceOfColorBackground2 = buttonColor[randomColorChoice];
  };

  ///////end //////////





});
