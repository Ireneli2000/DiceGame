var randomNumber1 = Math.floor(Math.random() * 6) + 1; //give a random number between 1-6
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice1= "images/dice"+randomNumber1+".png";
var randomDice2= "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",randomDice1);
document.querySelector(".img2").setAttribute("src",randomDice2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Play 1 wins!";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="Play 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "Draw"
}


//randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
//randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
//document.querySelector(".img1").src="images/dice" + randomNumber1 + ".png";
//document.querySelector(".img2").src="images/dice" + randomNumber2 + ".png";
