function BlackJack(){
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
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var card=(getRandomInt(52))+1;
if (card==1){
var value=11
var card="A Clubs"
}
if (card==2){
var value=2
var card="2 Clubs"
}
if (card==3){
var value=3
var card="3 Clubs"
}
if (card==4){
var value=4
var card="4 Clubs"
}
if (card==5){
var value=5
var card="5 Clubs"
}
if (card==6){
var value=6
var card="6 Clubs"
}
if (card==7){
var value=7
var card="7 Clubs"
}
if (card==8){
var value=8
var card="8 Clubs"
}
if (card==9){
var value=9
var card="9 Clubs"
}
if (card==10){
var value=10
var card="10 Clubs"
}
if (card==11){
var value=10
var card="J Clubs"
}
if (card==12){
var value=10
var card="Q Clubs"
}
if (card==13){
var value=10
var card="K Clubs"
}
if (card==14){
var value=11
var card="A Spades"
}
if (card==15){
var value=2
var card="2 Spades"
}
if (card==16){
var value=3
var card="3 Spades"
}
if (card==17){
var value=4
var card="4 Spades"
}
if (card==18){
var value=5
var card="5 Spades"
}
if (card==19){
var value=6
var card="6 Spades"
}
if (card==20){
var value=7
var card="7 Spades"
}
if (card==21){
var value=8
var card="8 Spades"
}
if (card==22){
var value=9
var card="9 Spades"
}
if (card==23){
var value=10
var card="10 Spades"
}
if (card==24){
var value=10
var card="J Spades"
}
if (card==25){
var value=10
var card="Q Spades"
}
if (card==26){
var value=10
var card="K Spades"
}
if (card==27){
var value=11
var card="A Hearts"
}
if (card==28){
var value=2
var card="2 Hearts"
}
if (card==29){
var value=3
var card="3 Hearts"
}
if (card==30){
var value=4
var card="4 Hearts"
}
if (card==31){
var value=5
var card="5 Hearts"
}
if (card==32){
var value=6
var card="6 Hearts"
}
if (card==33){
var value=7
var card="7 Hearts"
}
if (card==34){
var value=8
var card="8 Hearts"
}
if (card==35){
var value=9
var card="9 Hearts"
}
if (card==36){
var value=10
var card="10 Hearts"
}
if (card==37){
var value=10
var card="J Hearts"
}
if (card==38){
var value=10
var card="Q Hearts"
}
if (card==39){
var value=10
var card="K Hearts"
}
if (card==40){
var value=11
var card="A Diamonds"
}
if (card==41){
var value=2
var card="2 Diamonds"
}
if (card==42){
var value=3
var card="3 Diamonds"
}
if (card==43){
var value=4
var card="4 Diamonds"
}
if (card==44){
var value=5
var card="5 Diamonds"
}
if (card==45){
var value=6
var card="6 Diamonds"
}
if (card==46){
var value=7
var card="7 Diamonds"
}
if (card==47){
var value=8
var card="8 Diamonds"
}
if (card==48){
var value=9
var card="9 Diamonds"
}
if (card==49){
var value=10
var card="10 Diamonds"
}
if (card==50){
var value=10
var card="J Diamonds"
}
if (card==51){
var value=10
var card="Q Diamonds"
}
if (card==52){
var value=10
var card="K Diamonds"
}

//alert (card)
if (i+1==1){
var valuea=value
var carda=card
}
if (i+1==2){
var valueb=value
var cardb=card
}
if (i+1==3){
var valuec=value
var cardc=card
}
if (i+1==4){
var valued=value
var cardd=card
}
if (i+1==5){
var valuee=value
var carde=card
}
if (i+1==6){
var valuef=value
var cardf=card
}
if (i+1==7){
var valueg=value
var cardg=card
}
if (i+1==8){
var valueh=value
var cardh=card
}
if (i+1==9){
var valuei=value
var cardi=card
}
if (i+1==10){
var valuej=value
var cardj=card
}
if (i+1==11){
var valuek=value
var cardk=card
}
if (i+1==12){
var valuel=value
var cardl=card
}
if (i+1==13){
var valuem=value
var cardm=card
}
if (i+1==14){
var valuen=value
var cardn=card
}
if (i+1==15){
var valueo=value
var cardo=card
}
if (i+1==16){
var valuep=value
var cardp=card
}
if (i+1==17){
var valueq=value
var cardq=card
}
if (i+1==18){
var valuer=value
var cardr=card
}
if (i+1==19){
var values=value
var cards=card
}
if (i+1==20){
var valuet=value
var cardt=card
}
if (i+1==100){
//alert (carda+", "+cardb+", "+cardc+", "+cardd+", "+carde+", "+cardf+", "+cardg+", "+cardh+", "+cardi+", "+cardj)
}

if (i+1==100){
alert ("[dealer has unknown + "+cardb+"] [you have "+cardk+" + "+cardl+"]")
if (valuek+valuel==21){
var bet=bet*2.5
alert ("BlackJack, won "+bet)
}
if (valuek+valuel!=21){
if (valuek+valuel>=9){
if (valuek+valuel<=11){
var movea=prompt ("would you like to double down","double down")
if (movea=="double down")
var bet=bet*2
}
}
if (movea!="double down"){
var movea=prompt ("would you like to hit or stand","hit")
}
if (movea!="double down"){
if (movea!="hit"){
alert ("end")
//alert (valuek+valuel)
if (valuea+valueb>=17){
alert (valuea+valueb)
var dvalue=valuea+valueb
}
if (valuea+valueb<17){
alert ("[dealer has "+carda+" + "+cardb+" + "+cardc+"] [you have "+cardk+" + "+cardl+"]")
if (valuea+valueb+valuec>=17){
if (valuea+valueb+valuec>21){
if (valuea==11){
var valuea=1
}
}
if (valuea+valueb+valuec>21){
if (valueb==11){
var valueb=1
}
}
if (valuea+valueb+valuec>21){
if (valuec==11){
var valuec=1
}
}
alert (valuea+valueb+valuec)
var dvalue=valuea+valueb+valuec
}
if (valuea+valueb+valuec<17){
alert (valuea+valueb+valuec)
if (valuea+valueb+valuec+valued>=17){
alert (valuea+valueb+valuec+valued)
var dvalue=valuea+valueb+valuec+valued
}
if (valuea+valueb+valuec+valued<17){
alert (valuea+valueb+valuec+valued)
if (valuea+valueb+valuec+valued+valuee>=17){
alert (valuea+valueb+valuec+valued+valuee)
var dvalue=valuea+valueb+valuec+valued+valuee
}
}
}
}
if (dvalue<=21){
if (dvalue<valuek+valuel){
var bet=bet*2
alert ("you won "+bet)
}
}
if (dvalue>21){
var bet=bet*2
alert ("you won "+bet)
}
if (dvalue<=21){
if (dvalue>valuek+valuel){
alert ("you lost "+bet)
}
}
if (dvalue==valuek+valuel){
alert ("tie")
var tie="true"
}
}

}
if (movea=="double down"){
alert ("[dealer has unknown + "+cardb+"] [you have "+cardk+" + "+cardl+" + "+cardm+"]")
if (valuek+valuel+valuem>21){
if (valuek==11){
var valuek=1
}
}
if (valuek+valuel+valuem>21){
if (valuel==11){
var valuel=1
}
}
if (valuek+valuel+valuem>21){
if (valuem==11){
var valuem=1
}
}
if (valuek+valuel+valuem>21){
alert ("you busted, lost "+bet)
}

alert ("end")
if (valuea+valueb>=17){
alert (valuea+valueb)
var dvalue=valuea+valueb
}
if (valuea+valueb<17){
alert ("[dealer has "+carda+" + "+cardb+" + "+cardc+"] [you have "+cardk+" + "+cardl+"]")
if (valuea+valueb+valuec>=17){
if (valuea+valueb+valuec>21){
if (valuea==11){
var valuea=1
}
}
if (valuea+valueb+valuec>21){
if (valueb==11){
var valueb=1
}
}
if (valuea+valueb+valuec>21){
if (valuec==11){
var valuec=1
}
}
alert (valuea+valueb+valuec)
var dvalue=valuea+valueb+valuec
}
if (valuea+valueb+valuec<17){
alert (valuea+valueb+valuec)
if (valuea+valueb+valuec+valued>=17){
alert (valuea+valueb+valuec+valued)
var dvalue=valuea+valueb+valuec+valued
}
if (valuea+valueb+valuec+valued<17){
alert (valuea+valueb+valuec+valued)
if (valuea+valueb+valuec+valued+valuee>=17){
alert (valuea+valueb+valuec+valued+valuee)
var dvalue=valuea+valueb+valuec+valued+valuee
}
}
}
}
if (dvalue<=21){
if (dvalue<valuek+valuel+valuem){
var bet=bet*2
alert ("you won "+bet)
}
}
if (dvalue>21){
var bet=bet*2
alert ("you won "+bet)
}
if (dvalue<=21){
if (dvalue>valuek+valuel+valuem){
alert ("you lost "+bet)
}
}
if (dvalue==valuek+valuel+valuem){
alert ("tie")
var tie="true"
}

}

if (movea=="hit"){
alert ("[dealer has unknown + "+cardb+"] [you have "+cardk+" + "+cardl+" + "+cardm+"]")
if (valuek+valuel+valuem>21){
if (valuek==11){
var valuek=1
}
}
if (valuek+valuel+valuem>21){
if (valuel==11){
var valuel=1
}
}
if (valuek+valuel+valuem>21){
if (valuem==11){
var valuem=1
}
}
if (valuek+valuel+valuem>21){
alert ("you busted, lost "+bet)
}


if (valuek+valuel+valuem<=21){
var moveb=prompt ("would you like to hit or stand","hit")
if (moveb!="hit"){
alert ("end")
if (valuea+valueb>=17){
alert (valuea+valueb)
var dvalue=valuea+valueb
}
if (valuea+valueb<17){
alert ("[dealer has "+carda+" + "+cardb+" + "+cardc+"] [you have "+cardk+" + "+cardl+"]")
if (valuea+valueb+valuec>=17){
if (valuea+valueb+valuec>21){
if (valuea==11){
var valuea=1
}
}
if (valuea+valueb+valuec>21){
if (valueb==11){
var valueb=1
}
}
if (valuea+valueb+valuec>21){
if (valuec==11){
var valuec=1
}
}
alert (valuea+valueb+valuec)
var dvalue=valuea+valueb+valuec
}
if (valuea+valueb+valuec<17){
alert (valuea+valueb+valuec)
if (valuea+valueb+valuec+valued>=17){
alert (valuea+valueb+valuec+valued)
var dvalue=valuea+valueb+valuec+valued
}
if (valuea+valueb+valuec+valued<17){
alert (valuea+valueb+valuec+valued)
if (valuea+valueb+valuec+valued+valuee>=17){
alert (valuea+valueb+valuec+valued+valuee)
var dvalue=valuea+valueb+valuec+valued+valuee
}
}
}
}
if (dvalue<=21){
if (dvalue<valuek+valuel+valuem){
var bet=bet*2
alert ("you won "+bet)
}
}
if (dvalue>21){
var bet=bet*2
alert ("you won "+bet)
}
if (dvalue<=21){
if (dvalue>valuek+valuel+valuem){
alert ("you lost "+bet)
}
}
if (dvalue==valuek+valuel+valuem){
alert ("tie")
var tie="true"
}

}
if (moveb=="hit"){
alert ("[dealer has unknown + "+cardb+"] [you have "+cardk+" + "+cardl+" + "+cardm+" + "+cardn+"]")
if (valuek+valuel+valuem+valuen>21){
if (valuek==11){
var valuek=1
}
}
if (valuek+valuel+valuem+valuen>21){
if (valuel==11){
var valuel=1
}
}
if (valuek+valuel+valuem+valuen>21){
if (valuem==11){
var valuem=1
}
}
if (valuek+valuel+valuem+valuen>21){
if (valuen==11){
var valuen=1
}
}

if (valuek+valuel+valuem+valuen>21){
alert ("you busted, lost "+bet)
}
}

if (valuek+valuel+valuem+valuen<=21){
var movec=prompt ("would you like to hit or stand","hit")
if (movec!="hit"){
alert ("end")
if (valuea+valueb>=17){
alert (valuea+valueb)
var dvalue=valuea+valueb
}
if (valuea+valueb<17){
alert ("[dealer has "+carda+" + "+cardb+" + "+cardc+"] [you have "+cardk+" + "+cardl+"]")
if (valuea+valueb+valuec>=17){
if (valuea+valueb+valuec>21){
if (valuea==11){
var valuea=1
}
}
if (valuea+valueb+valuec>21){
if (valueb==11){
var valueb=1
}
}
if (valuea+valueb+valuec>21){
if (valuec==11){
var valuec=1
}
}
alert (valuea+valueb+valuec)
var dvalue=valuea+valueb+valuec
}
if (valuea+valueb+valuec<17){
alert (valuea+valueb+valuec)
if (valuea+valueb+valuec+valued>=17){
alert (valuea+valueb+valuec+valued)
var dvalue=valuea+valueb+valuec+valued
}
if (valuea+valueb+valuec+valued<17){
alert (valuea+valueb+valuec+valued)
if (valuea+valueb+valuec+valued+valuee>=17){
alert (valuea+valueb+valuec+valued+valuee)
var dvalue=valuea+valueb+valuec+valued+valuee
}
}
}
}
if (dvalue<=21){
if (dvalue<valuek+valuel+valuem+valuen){
var bet=bet*2
alert ("you won "+bet)
}
}
if (dvalue>21){
var bet=bet*2
alert ("you won "+bet)
}
if (dvalue<=21){
if (dvalue>valuek+valuel+valuem+valuen){
alert ("you lost "+bet)
}
}
if (dvalue==valuek+valuel+valuem+valuen){
alert ("tie")
var tie="true"
}
}

}
if (movec=="hit"){
alert ("[dealer has unknown + "+cardb+"] [you have "+cardk+" + "+cardl+" + "+cardm+" + "+cardn+" + "+cardo+"]")
if (valuek+valuel+valuem+valuen+valueo>21){
if (valuek==11){
var valuek=1
}
}
if (valuek+valuel+valuem+valuen+valueo>21){
if (valuel==11){
var valuel=1
}
}
if (valuek+valuel+valuem+valuen+valueo>21){
if (valuem==11){
var valuem=1
}
}
if (valuek+valuel+valuem+valuen+valueo>21){
if (valuen==11){
var valuen=1
}
}
if (valuek+valuel+valuem+valuen+valueo>21){
if (valueo==11){
var valueo=1
}
}
if (valuek+valuel+valuem+valuen+valueo>21){
alert ("you busted, lost "+bet)
}
}

if (valuek+valuel+valuem+valuen+valueo<=21){
var moved=prompt ("would you like to hit or stand","hit")
if (moved!="hit"){
alert ("end")
if (valuea+valueb>=17){
alert (valuea+valueb)
var dvalue=valuea+valueb
}
if (valuea+valueb<17){
alert ("[dealer has "+carda+" + "+cardb+" + "+cardc+"] [you have "+cardk+" + "+cardl+"]")
if (valuea+valueb+valuec>=17){
if (valuea+valueb+valuec>21){
if (valuea==11){
var valuea=1
}
}
if (valuea+valueb+valuec>21){
if (valueb==11){
var valueb=1
}
}
if (valuea+valueb+valuec>21){
if (valuec==11){
var valuec=1
}
}
alert (valuea+valueb+valuec)
var dvalue=valuea+valueb+valuec
}
if (valuea+valueb+valuec<17){
alert (valuea+valueb+valuec)
if (valuea+valueb+valuec+valued>=17){
alert (valuea+valueb+valuec+valued)
var dvalue=valuea+valueb+valuec+valued
}
if (valuea+valueb+valuec+valued<17){
alert (valuea+valueb+valuec+valued)
if (valuea+valueb+valuec+valued+valuee>=17){
alert (valuea+valueb+valuec+valued+valuee)
var dvalue=valuea+valueb+valuec+valued+valuee
}
}
}
}
if (dvalue<=21){
if (dvalue<valuek+valuel+valuem+valuen+valueo){
var bet=bet*2
alert ("you won "+bet)
}
}
if (dvalue>21){
var bet=bet*2
alert ("you won "+bet)
}
if (dvalue<=21){
if (dvalue>valuek+valuel+valuem+valuen+valueo){
alert ("you lost "+bet)
}
}
if (dvalue==valuek+valuel+valuem+valuen+valueo){
alert ("tie")
var tie="true"
}
}

}
if (moved=="hit"){
alert ("[dealer has unknown + "+cardb+"] [you have "+cardk+" + "+cardl+" + "+cardm+" + "+cardn+" + "+cardo+" + "+cardp+"]")
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
if (valuek==11){
var valuek=1
}
}
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
if (valuel==11){
var valuel=1
}
}
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
if (valuem==11){
var valuem=1
}
}
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
if (valuen==11){
var valuen=1
}
}
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
if (valueo==11){
var valueo=1
}
}
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
if (valuep==11){
var valuep=1
}
}
if (valuek+valuel+valuem+valuen+valueo+valuep>21){
alert ("you busted, lost "+bet)
}
}

}
}
//^these are for the values

}
}

if (i==99){
var wallet=localStorage.wallet
var wallet=wallet-initialbet
if (bet>initialbet){
var wallet=wallet-bet*-1
}
if (tie=="true"){
wallet=wallet-initialbet*-1
}
localStorage.wallet=wallet
}

}
}
