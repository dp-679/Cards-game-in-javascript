let cards=[
    {
        image:"https://earlpittsamerican.com/wp-content/uploads/2014/05/thor.png",
        value:1,
        status:"closed"
    },
    {
        image:"https://earlpittsamerican.com/wp-content/uploads/2014/05/thor.png",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/d7/bd/93/d7bd934adc5e5a50da570cb1bc98e946.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/564x/9b/76/75/9b767505f5a5df3df348a898ba4ae8bb.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.redd.it/qnc5fta5kxs61.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.redd.it/qnc5fta5kxs61.png",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/24/66/63/2466631aded1e3fa9ab21b44142577b6.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/24/66/63/2466631aded1e3fa9ab21b44142577b6.jpg",
        value:5,
        status:"closed"
    },
     



]


// durnsten shuffling alogorithm
 
for(let i=cards.length-1;i>=0;i--){

    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}


let cardsCopy=cards;




function displayCards(data){

    let cardsString="";
    
    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCards(${index})">
                </div>
            </div>     
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;

}



displayCards(cards);


let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCards(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount==2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
 
            // reset after one guess
            val1=null;
            val2=null;
            cardCount=1;
        }
        else{
            alert("GAME OVER");
            location.reload();
        }

    }

    displayCards(cards);
     
}