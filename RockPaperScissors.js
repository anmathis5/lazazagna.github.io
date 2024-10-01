function rps(){
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
var guess=prompt ("choose: rock paper scissors")
var n=(getRandomInt(3))+1;

if (guess!="rock"){
if (guess!="paper"){
if (guess!="scissors"){
alert ("invalid")
}
}
}

if (n==1){
//alert ("rock")
var n="rock"
}
if (n==2){
//alert ("paper")
var n="paper"
}
if (n==3){
//alert ("scissors")
var n="scissors"
}
if (n==guess){
alert ("tie")
}

if (guess=="rock"){
//alert ("rock")
if (n=="scissors"){
var bet=bet*2
alert ("won " + bet)
localStorage.wallet=wallet-bet*-1
}
if (n=="paper")
alert ("lost " + bet)
}
if (guess=="paper"){
//alert ("paper")
if (n=="rock"){
var bet=bet*2
alert ("won " + bet)
localStorage.wallet=wallet-bet*-1
}
if (n=="scissors")
alert ("lost " + bet)
}
if (guess=="scissors"){
//alert ("scissors")
if (n=="paper"){
var bet=bet*2
alert ("won " + bet)
localStorage.wallet=wallet-bet*-1
}
if (n=="rock")
alert ("lost " + bet)
}
}
