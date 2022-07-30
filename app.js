/*****Card Array*****/
const cardArray=[
    {     
        name:'fries',
        img:'images/fries.png'
    },
    {     
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {     
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {     
        name:'pizza',
        img:'images/pizza.png'
    },  
    {     
        name:'fries',
        img:'images/fries.png'
    },
   
    {     
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {     
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {     
        name:'pizza',
        img:'images/pizza.png'
    },  
]

let cardChosen=[];       //This array will store the flipped card // we used let keywords because we will re-initialize arrays
let cardChosenIds=[];
let cards=[];           //This array wil store the all images element of the cards

/**********/
/*******CREATEBOARD FUNCTION*******/

function createBoard()
{
for(let i=0;i<cardArray.length;i++)
{
    const card=document.createElement('img');
    card.setAttribute('src','images/hayday.png');
    card.setAttribute('id',i);                     //Id of the image and index of the cards array will be same
    card.addEventListener('click',flipCard)
   
    document.querySelector('.gridgame').appendChild(card)

}
} 

/*******CHECKWIN FUNCTION *******/

function checkwin(){
    if(cardswon.length===cardArray.length/2)
    { 
        document.getElementById("result").innerHTML = "Wohoo🤩🎉!You won the game!";
        document.querySelector("button").innerHTML="Play Again"
        
    }
    else return;
    
    }

/*******CHECKMATCH FUNCTION*******/
 //It will have data of score
function checkmatch()
{  

    if (cardChosen[0]==cardChosen[1])
    {   count++;
        cards[cardChosenIds[0]].removeEventListener('click',flipCard);
        cards[cardChosenIds[1]].removeEventListener('click',flipCard);
        cardswon.push(cardChosen);
        document.querySelector('#result').innerHTML=count;

    }
    else
    {
        cards[cardChosenIds[0]].addEventListener('click',flipCard);
        cards[cardChosenIds[1]].addEventListener('click',flipCard);
        cards[cardChosenIds[0]].setAttribute('src','images/hayday.png');
        cards[cardChosenIds[1]].setAttribute('src','images/hayday.png')

    }
    cardChosenIds=[];
    cardChosen=[];
    checkwin();
}



/*******flipcard Function *******/
function flipCard()
{
   const cardId= this.getAttribute('id');
   

   this.setAttribute('src',cardArray[cardId].img);
   cardChosen.push(cardArray[cardId].name);
   cardChosenIds.push(cardId)
   cards[cardId].removeEventListener('click',flipCard);
   console.log(cardChosen)
   if(cardChosen.length===2){
    setTimeout(checkmatch,200)//Set time out is optional function
    //we used settimeout to animation
   }

}

/******Restart game Function ******/
function restart()
{
    console.log("hii")
    for(let j=0;j<12;j++)
    grid.removeChild(grid.lastElementChild);
    gametime()
    
    

}

let cardswon=[];
var count;

/******gamestart*****/
document.querySelector("button").addEventListener('click',gametime);
function game(){
    cardswon=[];  //Cardswon array an count both should be zero before starting game every time
    count=0;
    document.querySelector(".heading").innerHTML='Score: <span id="result">0</span>'
    document.querySelector("button").removeAttribute('id','button');
    document.querySelector('button').innerHTML='Restart Game'
    document.querySelector("button").addEventListener('click',restart);
    document.querySelector(".gridgame").setAttribute('id','grid');
    cardArray.sort(()=>0.5-Math.random())  //To suffle card array every time we call the function
    createBoard();
    cards=document.querySelectorAll('img');
}
function gametime(){
  
    document.querySelector("button").removeEventListener('click',gametime);
    setTimeout(game,400)
}
