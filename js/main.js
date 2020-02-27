////the initial setting ///////////
let array = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = true;
let gameOver = false;
let isGameReset = false;
let choiceOfChange1;
let choiceOfChange2;
let colorChoice;
let randomColorChoice;

let colorButtonSet = false;

let color = {
  red: '<img src="imges/macaron-red.png">',
  green: '<img src="imges/macaron-green.png">',
  yellow: '<img src="imges/macaron-yellow.png">',
  purple: '<img src="imges/macaron-purple.png">',
  pink: '<img src="imges/macaron-pink.png">'
};

let buttonColor = {
  red: "#ff6961",
  green: "#77dd77",
  yellow: "#fdfd96",
  purple: "#b19cd9",
  pink: "pink"
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


  ////the initial setting end  ///////////



///////check if the winning conditions are met or the game is draw//////////
  const checkWinner = function() {
    for (let i = 0; i < winningConditions.length; i++) {
      const current = array[winningConditions[i][0]];
      if (current !== "") {
        if (current === array[winningConditions[i][1]]) {
          if (current === array[winningConditions[i][2]]) {
            gameOver = true;
            $("#turn").text("You are winner !!");
            setTimeout(function() {
              $(".box")
                  .fadeOut(400, function() {
                      $(".box").html('<img src ="imges/cloud1.png">')
                        .addClass("swing")
                        .fadeIn()
                        .delay(2000)
                        .fadeOut(undefined, function() {
                          $(".box").removeClass("swing");
                        })
                  })
              console.log("I win");
            }, 2000)
          }
        }
      }
    }
    if (!array.includes("")) {
      $("#turn").text("The game is draw");
      $("#turn").css("background-color", "#aec6cf");
      $(".box")
        .delay(800)
        .html('<img src ="imges/cloud1.png">');
      console.log("draw");
    }
  };

  ///////check if the winning conditions are met or the game is draw  end //////////





/////lets start button will be disenabled /////////
  const disenabled = function() {
    if (!gameOver && !isGameReset) {
      $("#turn").prop("disabled", true);
    } else {
      $("#turn").prop("disabled", false);
    }
  };

  //////lets start button will be disenabled  end /////////



//////the game starts//////////////////////////

      // /if the button color not is pressed the game does not run /
  $("#turn").click(function() {
    if (!colorButtonSet) {
      $("#error").text("♡Please select your macaron before you play♡")
      return;
    }
        ////if the button color is pressed, the game starts from here ////////////

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

  //////the game starts end /////////////////////





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

    ////the reset button ends ///////////////////

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

/////the color choice button ends//////////////////////////////


/////the second player will have random macaron color except for the one that is picked ///////


const randomColor = function(){
  randomColorChoice = Object.keys(color)[Math.floor(Math.random() * Object.keys(color).length)]


  while( colorChoice === randomColorChoice) {
    randomColorChoice = Object.keys(color)[Math.floor(Math.random() * Object.keys(color).length)]
  }

  choiceOfChange2 = color[randomColorChoice];
  choiceOfColorBackground2 = buttonColor[randomColorChoice];



};



// $('#red').trigger('click')
// $('#turn').trigger('click')
// $('#0').trigger('click')
// $('#4').trigger('click')
// $('#1').trigger('click')
// $('#5').trigger('click')
// $('#2').trigger('click')



});
