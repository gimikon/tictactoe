$(document).ready(function() {
  const array = ["", "", "", "", "", "", "", "", ""];
  let currentPlayer = true; //true is X, false is O/// or set x;

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
        } else {
          button.html('<img src="imges/macaron-green.png">');
          array[i] = "o";
        }
        currentPlayer = !currentPlayer;
        console.log(array);
        console.log(currentPlayer);

      }
    });
  }
});


///winiing conditions [8]
//if
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
// ["x", "x", "x", "o", "o", "o", "x", "x", "o"]
