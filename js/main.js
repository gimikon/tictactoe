$(document).ready(function() {
  const array = ["", "", "", "", "", "", "", "", ""];
  let count = 0;
  let currentPlayer = true;
     //true is X, false is O/// or set x;

     const checkWinner = function(){
       if (count >= 3) {

           if ( array[0] === "x" && array[1] === "x" && array[2] === "x" || array[0] === "o" && array[1] === "o" && array[2] === "o" ){
             console.log("game is finished !!!");

           } else if (array[3] === "x" && array[4] === "x" && array[5] === "x" || array[3] === "o" && array[4] === "o" && array[5] === "o"){
           console.log("game is finished !!!");

          } else if (array[6] === "x" && array[7] === "x" && array[8] === "x" || array[6] === "o" && array[7] === "o" && array[8] === "o") {
             console.log("game is finished !!!");

           } else if (array[0] === "x" && array[3] === "x" && array[6] === "x" || array[0] === "o" && array[3] === "o" && array[6] === "o") {
             console.log("game is finished !!!");

           } else if (array[1] === "x" && array[4] === "x" && array[7] === "x" || array[1] === "o" && array[4] === "o" && array[7] === "o"){
             console.log("game is finished !!!");

           } else if (array[2] === "x" && array[5] === "x" && array[8] === "x" || array[2] === "o" && array[5] === "o" && array[8] === "o") {
             console.log("game is finished !!!");

           } else if (array[0] === "x" && array[4] === "x" && array[8] === "x" || array[0] === "o" && array[4] === "o" && array[8] === "o") {
             console.log("game is finished !!!");

           } else if (array[2] === "x" && array[4] === "x" && array[6] === "x" || array[2] === "o" && array[4] === "o" && array[6] === "o") {
             console.log("game is finished !!!");
           }
        }
    };


  $("#turn").click( function(){
    $("#turn").text("It is your trun")});


  for (let i = 0; i < 9; i++) {
    const button = $(`#${i}`);
    button.click(function() {
      console.log("click", i);
      //checking if valid play
      if (array[i] === "") {
        //what marker will be displayed
        if (currentPlayer === true) {
          button.html('<img src="imges/macaron-red.png">');
          array[i] = "x";
          count += 1;
          $("#turn").text("It is my trun");
          checkWinner();


        } else {
          button.html('<img src="imges/macaron-green.png">');
          array[i] = "o";
          count += 1;
          $("#turn").text("It is your trun");
          checkWinner();

        }
        currentPlayer = !currentPlayer;

      }
    });
  }
});


//
//
// const findWinner = function(){
//     if ( count >= 3 ) {
//       for ( let i = 0 ; i < array.length; i ++){
//         if ( array === (array[0] === array[1] === array[2]) || (array[3] === array[4] === array[5] ) || array[6] === array[7] === array[8] || array[0] === array[3] === array[6] || array[1] === array[4] === array[7] || array[2] === array[5] === array[8] || array[0] === array[4] === array[8] ||) {
//         console.log("the Game is finished!!!")
//       }
//     } else if
//
//
//




//
//
//       ;
//       ;
//       ;
//       ;
//       ;
//       ;
//  {
//
//
//   }
// }
//
