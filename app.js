
const game = ()=>{
    let pScore = 0
    let cScore = 0

    const startGame = ()=>{
        const playBtn = document.querySelector('.intro-button')
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut')
            matchScreen.classList.add('fadeIn')
        })
    }
    // play match
     const playMatch = ()=>{
         const options = document.querySelectorAll('.options button')
         const playerHand = document.querySelector('.player-hand')
         const compHand = document.querySelector('.computer-hand')
         const hands = document.querySelectorAll('.hands img')

         hands.forEach(hand =>{
             hand.addEventListener('animationend',function(){
                 this.style.animation = ''
             })
         })
        //  comupter options
        const computerOptions = ['rock','paper','scissors']
        
        options.forEach(option=>{
            option.addEventListener('click',function(){
                // computer choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber]
                setTimeout(()=>{
                        // here we call compareHands()
                compareHands(this.textContent,computerChoice)

                // update images
                playerHand.src = `./images/${this.textContent}.png`
                compHand.src = `./images/${computerChoice}.png`
                
                
                },2000)
                playerHand.style.animation = 'shakePlayer 2s ease'
                compHand.style.animation = 'shakeComp 2s ease'
            })
        })        
     }
     const updateScore = ()=>{
         const playerScore = document.querySelector('.player-score p')
         const compScore = document.querySelector('.computer-score p')
         playerScore.textContent = pScore
         compScore.textContent = cScore
     }
     const compareHands = (playerChoice,computerChoice)=>{
         const winner = document.querySelector('.winner')
        //  check for tie
        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie'
            return
        }
        // check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }else{
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }
        }
        // check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }else{
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }
        }
        // check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return
            }else{
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return
            }
        }
     }
     startGame()
     playMatch()
}
// start game
game()































