//-------------[Restart]-------------------
let restart = document.querySelector('.restart')
restart.addEventListener('click',function()
{
    location.reload();
})



// -----------[Randomization]------------------
let allcards = document.querySelector('.memoryGame');
let allcard = Array.from(allcards.children);
// console.log(card);
// console.log(card.length);
let orders = [...Array(allcard.length).keys()]; //keys = 0 : length=16 "... is spred oprator to spred all elements in array"
// console.log(orders);

randomization(orders);
allcard.forEach((card , index) => {

        console.log(card , index);
        card.style.order = orders[index] ;
    })

function randomization(array)
{
    let current = array.length,
        tepm,
        random;

    while (current>0) {
        random = Math.floor(Math.random() * current) ;
        current -- ;
        console.log(random);
        // 1- save current element in var 
        tepm = array[current];
        //2- current element = random element
        array[current] = array[random];
        //3- random element = get element from var 
        array[random] = tepm ;
    }    
 return array
}



//----------------[Remove rotateY of memoryCard]-----------

let memoryCard = document.querySelectorAll('.memoryCard');
setTimeout(() => {
    console.log("test1");


memoryCard.forEach( function(memory)
{
    memory.classList.remove("rotate")
});


console.log("test2");

}, 6000);




// ---------------[countDown]------------------
let seconds = 5 ; //no.of seconed
let count = document.getElementById('countDown');
let countDown = setInterval(function()
{
    seconedPass()
} , 1000)

function seconedPass()
{

    let min = Math.floor(seconds / 60 );
    let remSec = seconds % 60

    count.innerHTML = min + remSec

    if (seconds > 0) {
        seconds -= 1 ; //dec 1 sec every 1 sec
    }else{
        clearInterval(countDown);
        count.innerHTML = 'Go!'
    }

}


//----------------[flipCard]-------------------
const cards = document.querySelectorAll('.memoryCard');
let fachTowQ = document.querySelector('img.fachTowQ');

let body = document.querySelector('body');

let flipedCared = false ;
let firstCard = '' ;
let secondCard = '' ;
let matchCards = 0 ; 


function flipCards()
{
    console.log(this);
    this.classList.add('flip');
    

    if(!flipedCared){
        //fisrt click
        flipedCared = true ;
        firstCard = this ;
        // console.log({flipedCared , firstCard});
    }else{
          //second click
          flipedCared = false ;
          secondCard = this ;
        //   console.log({firstCard , secondCard});

          //same Card ?
          console.log(firstCard.dataset.info);
          console.log(secondCard.dataset.info);
          if (firstCard.dataset.info === secondCard.dataset.info ){
            firstCard.removeEventListener('click' , flipCards);
            secondCard.removeEventListener('click' , flipCards);


// match all of the cards :
            matchCards+=1 ;
            console.log(matchCards);
            if (matchCards==8) {
                body.style.background ='linear-gradient(90deg, rgba(199,206,245,1) 19%, rgba(130,131,131,1) 86%)' ;
                count.innerHTML = 'congrats&#127941;'
            }


          }else{
            //Not match 
            flipedCared = true ;
            secondCard = this ;
            console.log(firstCard.dataset.info);
            console.log(secondCard.dataset.info);
            secondCard.classList.remove('flip');
            // secondCard.classList.remove("st");
            // secondCard.classList.add("addBackround");

                console.log("????");
            
                setTimeout(() => {
                    console.log("second adddd");
                
                    secondCard.classList.remove("st");
            secondCard.classList.add("addBackround");
                        
        
                }, 0);

                setTimeout(() => {
                    console.log("second remove");
                    secondCard.classList.remove("addBackround");
                    secondCard.classList.add("st");
                   
                    

                        
                }, 500);

            }
        }

        
}


cards.forEach(card=> card.addEventListener('click' , flipCards)) ;















  