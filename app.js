const btn = document.querySelector('button');
const pointer = document.getElementById('pointer');
let dicevalue = document.getElementById('dice');
const generate = document.querySelector('button');
const reset = document.querySelector('#reset');
let DV = document.querySelector('#dicevalue');
let posr = 3.0;
let posc = 3.0;
let row = 1;
let coloum = 1;
let i = 0;
let check = 0;
let pos=0;
let dice;
let c = 0;

//RESET BUTTON
reset.addEventListener('click', gameReset)

//DICE ROLL BUTTON
generate.addEventListener('click',()=>{
  new Audio('Shake And Roll Dice-SoundBible.com-591494296.mp3').play();
  dice=Math.floor(Math.random()*6)+1;  
  document.getElementById('dicevalue').innerText=`Dice Value: ${dice}`;  
  positionaDeterminer(dice);    
  if(pos>=100){
    check = 0;
    pos=0;
    dice;
    c = 0;
    posr = 3.0;
    posc = 3.0;
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
    document.querySelector('#dicevalue').innerText=`Dice Value: none`;
    document.querySelector('.result').innerText='game over, you won';
    setInterval(()=>{document.querySelector('.result').innerText='';},2000);
  }
})

//RESET FUNCTION
function gameReset(){
  check = 0;
  pos=0;
  dice;
  c = 0;
  posr = 3.0;
  posc = 3.0;
  pointer.style.left = posr + 'px';
  pointer.style.top = posc + 'px';
  document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
  document.querySelector('#dicevalue').innerText=`Dice Value: none`;
  document.querySelector('.result').innerText='game has been reset';
  setInterval(()=>{document.querySelector('.result').innerText='';},2000);
}

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

function aumove(dice){
  let count=0;
  while(count<dice){
    makeMove();
    count++;
     
  }

}

//CHECK FOR SNAKES
function snakeCheckg(rowpos , colpos){
  let k = rowpos.toFixed(1);
  //loca.innerHTML = `${k} , ${posc}`;
  
  //pos 17 to pos 7
  if(colpos==3+(52*(2-1)) && k == 3+(48.4*(4-1))){
    posr = 3+(48.4*(7-1));
    posc = 3+(52*(1-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 1;    
  }
  
  //pos 64 to pos 60
  if(colpos==3+(52*(7-1)) && k == 3+(48.4*(4-1))){
    posr = 3+(48.4*(1-1));
    posc = 3+(52*(6-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 6;    
  }
  
  //pos 89 to pos 26
  if(colpos==3+(52*(9-1)) && k == 3+(48.4*(9-1))){
    posr = 3+(48.4*(6-1));
    posc = 3+(52*(3-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 3;    
  }
  
  //pos 95 to pos 74
  if(colpos==3+(52*(10-1)) && k == 3+(48.4*(6-1))){
    posr = 3+(48.4*(7-1));
    posc = 3+(52*(8-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 8;    
  }
  
  //pos 99 to pos 78
  if(colpos==3+(52*(10-1)) && k == 3+(48.4*(2-1))){
    posr = 3+(48.4*(3-1));
    posc = 3+(52*(8-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 8;    
  }  
}

//CHECK FOR LADDERS
function ladderCheckg(rowpos , colpos){
  let k = rowpos.toFixed(1);
  //loca.innerHTML = `${k} , ${posc}`;
  
  //pos 4 to pos 14
  if(colpos==3+(52*(1-1)) && k == 3+(48.4*(4-1))){
    posr = 3+(48.4*(7-1));
    posc = 3+(52*(2-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 2;    
  }
  
  //pos 9 to pos 31
  if(colpos==3+(52*(1-1)) && k == 3+(48.4*(9-1))){
    posr = 3+(48.4*(10-1));
    posc = 3+(52*(4-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 4;    
  }
  
  //pos 20 to pos 38
  if(colpos==3+(52*(2-1)) && k == 3+(48.4*(1-1))){
    posr = 3+(48.4*(3-1));
    posc = 3+(52*(4-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 4;    
  }
  
  //pos 28 to pos 84
  if(colpos==3+(52*(3-1)) && k == 3+(48.4*(8-1))){
    posr = 3+(48.4*(4-1));
    posc = 3+(52*(9-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 9;    
  }
  
  //pos 51 to pos 67
  if(colpos==3+(52*(6-1)) && k == 3+(48.4*(10-1))){
    posr = 3+(48.4*(7-1));
    posc = 3+(52*(7-1));
    pointer.style.left = posr + 'px';
    pointer.style.top = posc + 'px';
    row = 7;    
  }  
}

function makeMove(){
  if(row%2!=0){
    posr += 48.4;    
    pointer.style.left = posr + 'px';
    
    if(posr>438.6){
      row++;
      posc+=52.0;
      pointer.style.top = posc + 'px';
    }  
    
  }
  if(row%2==0){
    posr-=48.4;    
    pointer.style.left = posr + 'px';    
    if(posr<2){
      row++; 
      posc+=52.0;
      posr=3.0;      
      pointer.style.left = posr + 'px';
      pointer.style.top = posc + 'px';         
    }      
  }
}

//DICE ROLL FUNCTION
function rollDice(){
  dice=Math.floor(Math.random()*6)+1;  
  document.getElementById('dicevalue').innerText=`Dice Value: ${dice}`;
}

//SNAKE CHECKER FUNCTION
function snakeCheck(){
  for(let i in snakes){
    if(pos==i){
      pos=snakes[i];
      new Audio('snakehiss.mp3').play();
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
      new Audio('y2mate.com - Climbing Fast  Sound Effect.mp3').play();
      document.querySelector('.result').innerText=`You climbed up the ladder from position ${i} to ${pos}`;     
    }
    else pos = pos;
  }
  return pos
}

//POSITION CALCULATOR FUNCTION
function positionaDeterminer(diceVal){
    
  if(diceVal==6 && check == 0){
    pos+=1;
    check=1;
  }
  else if(check==1){
    pos+=diceVal;
    aumove(diceVal);
  }
  snakeCheckg(posr , posc);
  ladderCheckg(posr , posc);
  pos = snakeCheck();
  pos = ladderCheck();   
  document.querySelector('.CurrentPosition').innerText= `Current Position: ${pos}`;
}