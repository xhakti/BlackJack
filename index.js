
// DEALER VARIABLES 

let dealerCards = []
let dealerSum = 0
let delearHasBlackJack = false
let dealerIsAlive = false
let dealerMessage = ""
let dealerSumEl = document.getElementById("dealer-el")
let dealercardsEl = document.getElementById("dealercards-el")

// PLAYER VARIABLES 

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")





// ################### DEALER AND PLAYER  #################### 



function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {

    // PLAYER 
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    // DEALER 
    dealerIsAlive = true
    let Dfistcard = getRandomCard()
    let Dsecondcard = "🎴"
    dealerCards = [Dfistcard, Dsecondcard]
    dealerSum = Dfistcard 
    
    renderGame()

    
}




function renderGame() {

    
    // PLAYER

    hasBlackJack = false
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = sum
    if (sum <= 20) {
        message = "💸 HIT OR STAY 💸"
    } else if (sum === 21) {
        message = "🎉 You Win! 🎉"
        hasBlackJack = true
    } else {
        message = "😞 You Lose! 😞"
        isAlive = false
    }
    messageEl.textContent = message


    // DEALER 
    dealercardsEl.textContent = "Cards: "
    for (let i = 0; i < dealerCards.length; i++){
        dealercardsEl.textContent += dealerCards[i] + " "
    }
    dealerSumEl.textContent = dealerSum


}
// ################### PLAYER  #################### 

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}


// ################### DEALER #################### 

function dealerNewCard(){
    if (dealerIsAlive === true && delearHasBlackJack === false) {
        
        let card = getRandomCard()
        dealerSum += card
        
        dealerCards.push(card)
        renderGame()        
    }
}

function stay(){
    // THIS POPS OUT THE EMOJI GIVEN BEFORE 
    dealerCards.pop(1)

    
    if (isAlive ==true && hasBlackJack == false){


        while (dealerSum < sum && dealerSum < 21){
            dealerNewCard()
        }

        

        if (dealerSum > 21){
            
            isAlive = false
            hasBlackJack = true
            dealerMessage = "🎉 You Win! 🎉"
            
        }else if (dealerSum == sum){
            isAlive = false
            hasBlackJack = false
            dealerMessage = "😈 WE TIED 😈"

        }else if (dealerSum == 21){

            isAlive = false
            hasBlackJack = false
            dealerMessage = "😞 You Lose! 😞"

        }else if (dealerSum > sum && dealerSum < 21){

            isAlive = false
            hasBlackJack = false
            dealerMessage = "😞 You Lose! 😞"

        }
       
        messageEl.textContent = dealerMessage
    }

}


// how to play function

function howtoplay(){
    let howtoplay = "\n✨ To win: Get closer to or equal to 21 ✨\n📌 Click 'NEW GAME' to start new game \n     It will give you and dealer 2 cards and one of the dealers cards will be hidden.\n📌 Click 'HIT' to get new cards\n        It will give you cards and you can use it as many times as you want.\n📌 Click 'STAY' to let the delear reveal his hand\n      It will show the dealers hand and then it will display the result of the game."
    alert(howtoplay)
}