function gamble(){
for (i=0;i<=99;i++)
{
if (i==0){
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
}

 (x = (Math.floor(Math.random() * 2) == 0));
if (x != true)
var x = "heads"

if (x != "heads")
var x = "tails"

if (x=="tails"){
var TotalHeads=TotalHeads+1;
}
if (x=="heads"){
var TotalTails=TotalTails+1;
}
var Total = TotalHeads + TotalTails;

//if (x == "heads") alert ("heads<br>")
//if (x == "tails") alert ("tails<br>")

var a = 1;
var b = 1
if (a==1){
var a=b
if (c>=0){
if (x=="heads")
var b=c+b
}
}

if (c==t){
var t=a
}
if (c>=t)
var t=c



var c = b;



if (c>=0){
//alert (c,t-1)
}

if (i==99){
//alert (t-1)
}



if (i==99){
if (t-1<7){
alert ("you lost " + bet)
}
}

if (i==99){
if (t-1>=7){
//alert ("won")
var bet = bet * 1.5
//alert (bet)
if (t-1>=10)
//alert ("won big")
var bet = bet * 10/3
//alert (bet)
if (t-1>=14)
var bet = bet * 5
if (t-1>=16)
var bet = bet * 4.2
}
}

if (i==99){
if (t-1>=7){
alert ("you won " + bet)
localStorage.wallet=wallet-bet*-1
}
}


}
}