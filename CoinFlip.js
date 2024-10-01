function coinflip(){
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
var TotalHeads=0
//alert (TotalHeads)
var TotalTails=0
//alert (TotalTails)
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
//alert(TotalHeads)
}

if (i==99){
//alert(TotalTails)
}

if (i==99){
if (TotalHeads<=50){
alert ("you lost " + bet)
}
}

if (i==99){
if (TotalHeads>50){
//alert ("won")
var bet = bet * 2
//alert (bet)
}
}

if (i==99){
if (TotalHeads>50){
alert ("you won " + bet)
localStorage.wallet=wallet-bet*-1
}
}

}
}