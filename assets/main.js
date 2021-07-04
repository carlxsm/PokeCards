//import{pokeStatus} from './pokedex';

let manycards = ["pikachu","piplup","squirtle","cyndaquil","turtwig","totodile","froakie","oshawott","mudkip","popplio","treecko","fennekin","chespin"];
// "Charmander" - "Snorlax" - "Growlithe" - "Marowak" - "Ditto" - "Bulbasaur" - "Eevee"
let cardwallet = []
let fathercard = document.querySelector(".wltcard")
const pokemons ={}
let i = 0
document.addEventListener('click',function(e){
    const el = e.target
    if(el.classList.contains("manycards")){randomCards()};
    if(el.classList.contains("btnPlay")){};
    if(el.classList.contains("card0")){alert(`${cardwallet[0]}`)};
    if(el.classList.contains("card1")){alert(`${cardwallet[1]}`)};
    if(el.classList.contains("card2")){alert(`${cardwallet[2]}`)};
    if(el.classList.contains("card3")){alert(`${cardwallet[3]}`)};
})
function createDivCard(a){
    let idCard = manycards[a]
    let cardMaker = document.createElement("div");
    console.log('catchii '+ a +' '+ manycards[a] )
    if (manycards[a] !== undefined && cardwallet.length < 4){
        if(cardwallet.length<=3){
            cardMaker.setAttribute('class',`card${cardwallet.length} card cpointer ${manycards[a]}`);
            //cardMaker.innerHTML+=idCard
            fathercard.appendChild(cardMaker);
            cardwallet.push(idCard)
            pokeType(idCard)
            console.log(manycards[a]+` Deleted`)
            delete manycards[a]
        }
    }else if(manycards[a] === undefined && cardwallet.length < 4){
        randomCards() 
        console.log('doublecheck '+ i++)
    }else{
        alert('Full cards!!!') 
    }
}
function randomCards(){
    let catchii = Math.floor(Math.random() * (manycards.length - 0) + 0)
    createDivCard(catchii)
}
function pokeType(t){
    let pokemonReceived = t
    console.log(pokemonReceived+" poketype")
}
/*
 el = e.target
 click = > div = true
 if click play, div true move to center
 if more than 1 div true => div gonna be false
*/