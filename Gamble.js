function gamble(){
for (times=0;times<=0;times++)
{
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
var initialbet=bet
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

if (i==0){
var a=0
var t=0
}
if (x=="heads"){
var a=a+1
}
if (x=="tails"){
var a=0
}
if (a>=t){
var t=a
}






if (i==99){
//alert (t-1)
}



if (i==99){
if (t<7){
alert ("you lost " + bet)
}
}

if (i==99){
if (t>=7){
//alert ("won")
var bet = initialbet * 1.2
if (t>=8)
var bet = initialbet * 2
//alert (bet)
if (t>=10)
//alert ("won big")
var bet = initialbet * 5
//alert (bet)
if (t>=14)
var bet = initialbet * 25
if (t>=16)
var bet = initialbet * 105
}
}

if (i==99){
if (t>=7){
alert ("you won " + bet)
localStorage.wallet=wallet-bet*-1
}
}

}
//alert(" <br>")
}
}