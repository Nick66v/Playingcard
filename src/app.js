window.onload = function(){
    const topsuite = document.querySelector("#topsuite")
    const suits = ["♠","♣","♦","♥"]
    function randomizer(array){
return Math.floor(Math.random() * array.length)
    }
    let suit = suits[randomizer(suits)]
  
    }
    topsuite.innerHTML = suit
    const bottomsuite = document.querySelector("#bottomsuite")
    bottomsuite.innerHTML = suit

    const numbers = document.querySelector("#numbers")
    const cards = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
    let card = cards[randomizer(cards)]
    numbers.innerHTML = card

}