let isMushroom = 2;
const snake = document.getElementById('snake');
let x = '';
function michaelSux(){
  if(isMushroom == 100){x+= '<a href="http://www.albinoblacksheep.com/flash/badgers">view </a>'}
  else if(isMushroom%66 == 0){x+= 'Snake, o Snake! oooooOOOOoooo it\'s a snake! ';}
  else if (isMushroom%14 > 1){
  x=x+'badger '}
  else {x+='MUSHROOM! '}
isMushroom++;
snake.innerHTML = x;
console.log(isMushroom);
}