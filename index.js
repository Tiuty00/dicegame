var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
var title = document.querySelector("h1");

var button = document.querySelector(".btn");



button.addEventListener("click", images);

  function images () {
      
      var randomNumber1 = Math.floor(Math.random() * 6)+1; 
      var randomNumber2 = Math.floor(Math.random() * 6)+1;

      dice1.src = "images/dice"+ randomNumber1 +".png";
      dice2.src = "images/dice"+ randomNumber2 +".png";

      if (dice1.src < dice2.src) {
            title.innerHTML = "Player 2 wins! 🚩";
            document.querySelector(".scorep2").innerHTML++;
      } else if (dice1.src > dice2.src) {
            title.innerHTML = "🚩 Player 1 wins!";
            document.querySelector(".scorep1").innerHTML++;
      } else if (dice1.src == dice2.src) {
            title.innerHTML = "Draw!";
      }
}





