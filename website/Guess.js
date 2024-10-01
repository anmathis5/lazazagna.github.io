function guess(){
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var bet=prompt ("place a bet between 1 and 10",10)
if (bet>10){
alert ("invalid")
var i=-1
}
if (bet<1){
alert ("invalid")
var i=-1
}
var wallet=localStorage.wallet
var wallet=wallet-bet
localStorage.wallet=wallet
var guess=prompt ("guess a number between 1 and 10")
var n=(getRandomInt(10))+1;
alert ("the number is "+n)
if (n==guess){
var bet=bet*5
alert ("you won " + bet)
localStorage.wallet=wallet+bet
}
if (n!=guess){
alert ("you lost " + bet)
}
}