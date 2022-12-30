const btn = document.querySelector('button');
const pointer = document.getElementById('pointer');
let dicevalue = document.getElementById('dice');
const generate = document.querySelector('button');
const reset = document.querySelector('#reset');
let DV = document.querySelector('#dicevalue');
let bw;
ladderpos();
snakepos();
const snakes = {
  17:7,
  64:60,
  89:26,
  95:74,
  99:78,
}
const LADDERS = {
  4:14,
  9:31,
  20:38,
  28:84,
  51:67,
}
let posr = 3.0;
let posc = 3.0;
let row = 1;
let coloum = 1;
let i = 0;
let check = 0;
let pos=0;
let dice;
let c = 0;

function ladderpos(){
  ladderposone();
  ladderpostwo();
  ladderposthree();
  ladderposfour();
  ladderposfive();

}
function snakepos(){
 snakeposone();
 snakepostwo();
 snakeposthree();
 snakeposfour();
 snakeposfive();
}

function snakeposone(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(2-1);
    let y = (document.getElementById('box').offsetWidth)*(4-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = (270 - (Math.atan(x/y)*(180/Math.PI)))+10;
    left = (3+(bw*(4-1)) +(y/2))-10;
    top = ((3+((document.getElementById('row').offsetHeight)*(1-1)))+(47/2))-35.0;//-((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('s1').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('s1').style.height = `${height.toFixed(1)}px`;
    document.getElementById('s1').style.left = `${left.toFixed(1)}px`;
    document.getElementById('s1').style.top = `${top.toFixed(1)}px`; 
}
function snakepostwo(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(1-1);
    let y = (document.getElementById('box').offsetWidth)*(4-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = (90 + (Math.atan(x/y)*(180/Math.PI)))+42;
    left = (3+(bw*(1-1)) +(y/2))-5;
    top = ((3+((document.getElementById('row').offsetHeight)*(6-1)))+(47/2))-47.0;//-((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('s2').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('s2').style.height = `${height.toFixed(1)}px`;
    document.getElementById('s2').style.left = `${left.toFixed(1)}px`;
    document.getElementById('s2').style.top = `${top.toFixed(1)}px`; 
}
function snakeposthree(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(7-1);
    let y = (document.getElementById('box').offsetWidth)*(3-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))+50;
    angle = (90 + (Math.atan(x/y)*(180/Math.PI)));
    left = (3+(bw*(6-1)) +(y/2))+16;
    top = ((3+((document.getElementById('row').offsetHeight)*(3-1)))+(47/2))-30;//-((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('s3').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('s3').style.height = `${height.toFixed(1)}px`;
    document.getElementById('s3').style.left = `${left.toFixed(1)}px`;
    document.getElementById('s3').style.top = `${top.toFixed(1)}px`; 
}
function snakeposfour(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(3-1);
    let y = (document.getElementById('box').offsetWidth)*(2-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = (90+(Math.atan(x/y)*(180/Math.PI)))+70;
    left = (3+(bw*(6-1)) +(y/2))-10;
    top = ((3+((document.getElementById('row').offsetHeight)*(8-1)))+(47/2))-10;//-((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('s4').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('s4').style.height = `${height.toFixed(1)}px`;
    document.getElementById('s4').style.left = `${left.toFixed(1)}px`;
    document.getElementById('s4').style.top = `${top.toFixed(1)}px`; 
}
function snakeposfive(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(3-1);
    let y = (document.getElementById('box').offsetWidth)*(2-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = (90+(Math.atan(x/y)*(180/Math.PI)))+70;
    left = (3+(bw*(2-1)) +(y/2))-10;
    top = ((3+((document.getElementById('row').offsetHeight)*(8-1)))+(47/2))-10;//-((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('s5').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('s5').style.height = `${height.toFixed(1)}px`;
    document.getElementById('s5').style.left = `${left.toFixed(1)}px`;
    document.getElementById('s5').style.top = `${top.toFixed(1)}px`; 
}
function ladderposone(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(2-1);
    let y = (document.getElementById('box').offsetWidth)*(4-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = -(90 - (Math.atan(x/y)*(180/Math.PI)));
    left = (3+(bw*(4-1))+(y/2))+2.6;
    top = ((3+((document.getElementById('row').offsetHeight)*(1-1)))+(47/2))-27;//-((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('l1').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('l1').style.height = `${height.toFixed(1)}px`;
    document.getElementById('l1').style.left = `${left.toFixed(1)}px`;
    document.getElementById('l1').style.top = `${top.toFixed(1)}px`; 
}

function ladderpostwo(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(4-1);
    let y = (document.getElementById('box').offsetWidth)*(2-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = -(90 - (Math.atan(x/y)*(180/Math.PI)));
    left = (3+(bw*(9-1))+(y/2))+2.6;
    top = (((3+((document.getElementById('row').offsetHeight)*(1-1)))+(47/2)));//((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('l2').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('l2').style.height = `${height.toFixed(1)}px`;
    document.getElementById('l2').style.left = `${left.toFixed(1)}px`;
    document.getElementById('l2').style.top = `${top.toFixed(1)}px`; 
}

function ladderposthree(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(3-1);
    let y = (document.getElementById('box').offsetWidth)*(3-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = -(90 - (Math.atan(x/y)*(180/Math.PI)));
    left = (3+(bw*(1-1))+(y/2))+2.6;
    top = ((3+((document.getElementById('row').offsetHeight)*(2-1)))+(47/2))-18;

    document.getElementById('l3').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('l3').style.height = `${height.toFixed(1)}px`;
    document.getElementById('l3').style.left = `${left.toFixed(1)}px`;
    document.getElementById('l3').style.top = `${top.toFixed(1)}px`; 
}

function ladderposfour(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(7-1);
    let y = (document.getElementById('box').offsetWidth)*(5-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))+20;
    angle = (90 - (Math.atan(x/y)*(180/Math.PI)))-2;
    left = (3+(bw*(4-1))+(y/2))+2.6;
    top = (((3+((document.getElementById('row').offsetHeight)*(3-1)))+(47/2)))-20;//((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('l4').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('l4').style.height = `${height.toFixed(1)}px`;
    document.getElementById('l4').style.left = `${left.toFixed(1)}px`;
    document.getElementById('l4').style.top = `${top.toFixed(1)}px`; 
}
function ladderposfive(){
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);    
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(2-1);
    let y = (document.getElementById('box').offsetWidth)*(4-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = (90 - (Math.atan(x/y)*(180/Math.PI)))-2;
    left = (3+(bw*(7-1))+(y/2))+2.6;
    top = (((3+((document.getElementById('row').offsetHeight)*(6-1)))+(47/2)))-37;//((height/2) - ((document.getElementById('box').offsetHeight)*(1)));

    document.getElementById('l5').style.transform = `rotate(${angle.toFixed(1)}deg)`;
    document.getElementById('l5').style.height = `${height.toFixed(1)}px`;
    document.getElementById('l5').style.left = `${left.toFixed(1)}px`;
    document.getElementById('l5').style.top = `${top.toFixed(1)}px`; 
}


/*document.getElementById('normal').addEventListener('click', ()=>{
    makeMove(); 
    ladderpos();
    snakepos();
    bw = ((document.getElementById('row').offsetWidth / 10) - 0.4); 
    
   
    let angle;
    let height;
    let left;
    let top;

    let x = (document.getElementById('box').offsetHeight)*(2-1);
    let y = (document.getElementById('box').offsetWidth)*(4-1);
    height = Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)));
    angle = ((Math.atan(x/y)*(180/Math.PI)));
    //posr.toFixed(1)==(3+bw).toFixed(1)? v = "true": v = "false";
    //v = parseFloat((3+(bw*(6-1)))) + parseFloat((1).toFixed(1));
    //v = parseFloat(2.0) - parseFloat(1.0);
    
    document.getElementById('msg').innerHTML=`Co-ords=> Left: ${posr.toFixed(1)}px , Top: ${posc}px || ${angle} ${height}`;    
  });*/



//RESET BUTTON
reset.addEventListener('click', gameReset)
//RESET FUNCTION
function gameReset(){
  check = 0;
  pos=0;
  dice;
  c = 0;
  row = 1;
  coloum = 1;
  posr = 3.0;
  posc = 3.0;
  pointer.style.left = posr + 'px';
  pointer.style.top = posc + 'px';
  document.getElementById('msg').innerHTML=`Co-ords=> Left: ${posr.toFixed(1)}px , Top: ${posc}px`;
  document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
  document.querySelector('#dicevalue').innerText=`Dice Value: none`;
  document.querySelector('.result').innerText='GAME HAS BEEN RESET';
  setInterval(()=>{document.querySelector('.result').innerText='';},5000);
}

//---------------------------------//

//DICE ROLL BUTTON
generate.addEventListener('click',()=>{
  new Audio('Shake And Roll Dice-SoundBible.com-591494296.mp3').play();

  dice=Math.floor(Math.random()*6)+1;  
  bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);//value =48.4
  document.getElementById('dicevalue').innerText=`Dice Value: ${dice}`;  
  positionaDeterminer(dice);    
  if(pos>=100){
    check = 0;
    pos=0;
    dice;
    c = 0;
    //row = 1;
    //coloum = 1;
    //posr = 3.0;
    //posc = 3.0;
    //pointer.style.left = posr + 'px';
    //pointer.style.top = posc + 'px';
    document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
    document.querySelector('#dicevalue').innerText=`Dice Value: none`;
    document.querySelector('.result').innerText='YOU WON';
    setInterval(()=>{document.querySelector('.result').innerText='';},5000);
    //setTimeout(()=>{gameover()},3500); 
  }
})
//POSITION CALCULATOR FUNCTION
function positionaDeterminer(diceVal){
  let count=0; 
  if(diceVal==6 && check == 0){
    pos+=1;
    check=1;
  }
  else if(check==1){
    pos+=diceVal;
    aumove(diceVal);

  }
  //snakeCheckg(posr , posc);
  //ladderCheckg(posr , posc);
  pos = snakeCheck();
  pos = ladderCheck();   
  document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
  
}
//AUTOMATIC MOVEMENT FUNCTION
function aumove(dice){
  let count=0;  
  let v = setInterval(()=>{
    if(count<dice){
      makeMove();     
      count++;
    }else clearInterval(v);
  },300);
  setTimeout(()=>{  //document.getElementById('msg').innerHTML=`Co-ords=> Left: ${posr.toFixed(1)}px , Top: ${posc}px`;
    snakeCheckg(posr , posc);
    ladderCheckg(posr , posc);
  } , 2000) 
           
  /*while(count<dice){
    makeMove();
    count++;     
  }*/
}
//SINGLE SPET MOVEMENT FUNCTION
function makeMove(){
 
  if(row%2!=0){
    posr = parseFloat(posr.toFixed(1)) + parseFloat((((document.getElementById('row').offsetWidth / 10)- 0.4)).toFixed(1));    
    
    pointer.style.left = posr + 'px';
    
    if(posr>((3 + (((document.getElementById('row').offsetWidth / 10) - 0.4) * (10 - 1))))){
      row++;
      posc+=52.0;
      pointer.style.top = posc + 'px';
    }    
  }
  if(row%2==0){
    posr = parseFloat(posr.toFixed(1)) - parseFloat((((document.getElementById('row').offsetWidth / 10)- 0.4)).toFixed(1)); 
    pointer.style.left = posr + 'px';    
    if(posr<3){
      row++; 
      posc+=52.0;
      posr=3.0;      
      pointer.style.left = posr + 'px';
      pointer.style.top = posc + 'px';         
    }        
  }
  if(posc==471){
    if(posr<=3){
      pointer.style.left = 3 + 'px';
      pointer.style.top = 471 + 'px';
      document.querySelector('.result').innerText='game over, you won';
      new Audio('mixkit-arcade-game-complete-or-approved-mission-205.wav').play();
      setTimeout(()=>{gameover()},1500);
    }    
  }   
  if(posc>=523){
    if(posr>=3){
      pointer.style.left = 3 + 'px';
      pointer.style.top = 471 + 'px';
      document.querySelector('.result').innerText='game over, you won';
      new Audio('mixkit-arcade-game-complete-or-approved-mission-205.wav').play();
      setTimeout(()=>{gameover()},1500);
    }    
  } 
  
}
//CHECK FOR SNAKES
function snakeCheckg(rowpos , colpos){
  let k = rowpos.toFixed(1);
  bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);
  //loca.innerHTML = `${k} , ${posc}`;
  
  //pos 17 to pos 7
  if(colpos==3+(52*(2-1)) && k == (3+(bw*(4-1))).toFixed(1)){
    posr = (3+(bw*(7-1)));
    posc = 3+(52*(1-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('snakehiss.mp3').play();
    row = 1;    
  }
  
  //pos 64 to pos 60
  if(colpos==3+(52*(7-1)) && k == (3+(bw*(4-1))).toFixed(1)){
    posr = (3+(bw*(1-1)));
    posc = 3+(52*(6-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('snakehiss.mp3').play();
    row = 6;    
  }
  
  //pos 89 to pos 26
  if(colpos==3+(52*(9-1)) && k == (3+(bw*(9-1))).toFixed(1)){
    posr = (3+(bw*(6-1)));
    posc = 3+(52*(3-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('snakehiss.mp3').play();
    row = 3;    
  }
  
  //pos 95 to pos 74
  if(colpos==3+(52*(10-1)) && k == (3+(bw*(6-1))).toFixed(1)){
    posr = (3+(bw*(7-1)));
    posc = 3+(52*(8-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('snakehiss.mp3').play();
    row = 8;    
  }
  
  //pos 99 to pos 78
  if(colpos==3+(52*(10-1)) && k == (3+(bw*(2-1))).toFixed(1)){
    posr = (3+(bw*(3-1)));
    posc = 3+(52*(8-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('snakehiss.mp3').play();
    row = 8;    
  }  
}
//CHECK FOR LADDERS
function ladderCheckg(rowpos , colpos){
  let k = rowpos.toFixed(1);
  bw = ((document.getElementById('row').offsetWidth / 10) - 0.4);
  //pos 4 to pos 14
  if(colpos==3+(52*(1-1)) && k == (3+(bw*(4-1))).toFixed(1)){
    posr = (3+(bw*(7-1)));
    posc = 3+(52*(2-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px'; 
    new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();    
    row = 2;   
  }  
  //pos 9 to pos 31
  if(colpos==3+(52*(1-1)) && k == (3+(bw*(9-1))).toFixed(1)){
    posr = (3+(bw*(10-1)));
    posc = 3+(52*(4-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();    
    row = 4;    
  }  
  //pos 20 to pos 38
  if(colpos==3+(52*(2-1)) && k == (3+(bw*(1-1))).toFixed(1)){
    posr = (3+(bw*(3-1)));
    posc = 3+(52*(4-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();    
    row = 4;    
  } 
  //pos 28 to pos 84
  if(colpos==3+(52*(3-1)) && k == (3+(bw*(8-1))).toFixed(1)){
    posr = (3+(bw*(4-1)));
    posc = 3+(52*(9-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();    
    row = 9;    
  }  
  //pos 51 to pos 67
  if(colpos==3+(52*(6-1)) && k == (3+(bw*(10-1))).toFixed(1)){
    posr = (3+(bw*(7-1)));
    posc = 3+(52*(7-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();    
    row = 7;    
  }  
}
//SNAKE CHECKER FUNCTION
function snakeCheck(){
  for(let i in snakes){
    if(pos==i){
      pos=snakes[i];
      //new Audio('snakehiss.mp3').play();
      document.querySelector('.result').innerText=`You got swalloed by a snake at position ${i}`;     
    }
    else pos = pos;
  }
  return pos;
}
//LADDER CHECKER FUNCTION
function ladderCheck(){
  for(let i in LADDERS){
    if(pos==i){
      pos=LADDERS[i];
      //new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();
      document.querySelector('.result').innerText=`You climbed up the ladder from position ${i} to ${pos}`;     
    }
    else pos = pos;
  }
  return pos
}
//DICE ROLL FUNCTION
function rollDice(){
  dice=Math.floor(Math.random()*6)+1;  
  document.getElementById('dicevalue').innerText=`Dice Value: ${dice}`;
}
//GAME OVER FUNCTION
function gameover(){
  check = 0;
  pos=0;
  dice;
  c = 0;
  posr = 3.0;
  posc = 3.0;
  row = 1;
  coloum = 1;
  pointer.style.left = posr + 'px';
  pointer.style.top = posc + 'px';
  document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
  document.querySelector('#dicevalue').innerText=`Dice Value: none`;
  setInterval(()=>{document.querySelector('.result').innerText='';},5000);
  document.getElementById('msg').innerHTML=`Co-ords=> Left: ${posr.toFixed(1)}px , Top: ${posc}px`;
}
