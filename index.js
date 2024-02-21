
// code to generate random number between 1 to 6.

// this is for first dice 

var randomNumber1;
randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) +1;


var randomDiceImage = "dice" + randomNumber1 + ".png";                     /* dice1.png - dice6.png */

var randomImageSource = "images/" + randomDiceImage;             /* images/dice1.png   to   images/dice6.png  */

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



// for second dice 

var randomNumber2 = Math.floor(Math.random() *6) +1;                  /* random number between 1 - 6    */

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";      /* images/dice1.png --  images/dice6.png       */


document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);


// compare between two random numbers 

// if player one wins 

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins.";
}
else {
    if(randomNumber2 >  randomNumber1)
        document.querySelector("h1").innerHTML="Player 2 Wins.";
    else
        document.querySelector("h1").innerHTML="Draw.";
}