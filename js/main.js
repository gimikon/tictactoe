$(document).ready(function() {
  let array = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = true;
  let reset = false;


  const decidePlayer = function() {
    if (Math.random() > 0.5) {
      currentPlayer = true;
    } else {
      currentPlayer = false;
    }
  };

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
            $("#turn").text("I win !!");
            console.log("I win");
          }
        }
      }
    }
    if (!array.includes("")) {
      $("#turn").text("The game is draw");
      console.log("draw");
    }
  };


///Game start////
// 1 . if turn button is clicked, it will tell you who should play
// 2.  randomly choose who should play first ex.. you or me ?
// 3.  game starts start clicking the button every time player1 you click the button, img pops up
// 4. and next turn will start, everytime second player clicks, the img pops up

  $("#turn").click(function() {
        if (currentPlayer) {
          $("#turn").text("It is your turn");

          $('.box').on('click', function () {
            const i = this.id;
            if (array[i] === ""){
              if (currentPlayer === true){
                $(`#${i}`).html('<img src="imges/macaron-red.png">');
                array[i] = "x";
                $("#turn").text("It is my trun");
                checkWinner();
              } else {
                $(`#${i}`).html('<img src="imges/macaron-green.png">');
                array[i] = "o";
                $("#turn").text("It is your trun");
                checkWinner();
              }
              currentPlayer = !currentPlayer
            }
          })
        }

    });

  //       } else {
  //         $("#turn").text("It is my turn");
  //         gamePlay();
  //       }
  // } else {
  //       decidePlayer();
  //       if (currentPlayer) {
  //         $("#turn").text("It is your turn");
  //         gamePlay();
  //       } else {
  //         $("#turn").text("It is my turn");
  //         gamePlay();
  //
  //     }
  //   }
  // });


  // $('.box').on('click', function () {
  //   const i = this.id;
  //   if (array[i] === ""){
  //     if (currentPlayer === true){
  //       i.html('<img src="imges/macaron-red.png">');
  //       array[i] = "x";
  //       $("#turn").text("It is my trun");
  //       checkWinner();
  //     } else {
  //       i.html('<img src="imges/macaron-green.png">');
  //       array[i] = "o";
  //       $("#turn").text("It is your trun");
  //       checkWinner();
  //     }
  //     currentPlayer = !currentPlayer
  //   }
  // });
  //
  // const gamePlay = function() {
  //   for (let i = 0; i < array.length; i++) {
  //     const button = $(`#${i}`);
  //     button.click(function() {
  //     console.log("click" + i);
  //
  //       //checking if valid play
  //       if (array[i] === "") {
  //
  //         //what marker will be displayed
  //         if (currentPlayer === true) {
  //           button.html('<img src="imges/macaron-red.png">');
  //           array[i] = "x";
  //           $("#turn").text("It is my trun");
  //           checkWinner();
  //
  //         } else {
  //           button.html('<img src="imges/macaron-green.png">');
  //           array[i] = "o";
  //           $("#turn").text("It is your trun");
  //           checkWinner();
  //           }
  //           currentPlayer = !currentPlayer
  //         }
  //       })
  //     }
  //   };


  // $("#reset").click(function() {
  //   reset = true;
  //   const button = $(".box");
  //   button.html("");
  //   $("#turn").text("♡Let's start♡");
  //
  //
  //   });

});
