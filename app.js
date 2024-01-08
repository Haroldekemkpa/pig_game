/*
ADDVANCE ADAPTATIONS

1.  
*/


let players, roundScore, 
    activePlayer, gamePlaying, 
    lastDice, maxScore;

players = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

// maxScore = document.querySelector('.highest_score').value;

// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('current--1').textContent = '0';

Init();

document.querySelector('.btn--roll').addEventListener('click', function(){
    
    if(gamePlaying) {

        
            let dice, dice2;
            dice = Math.floor(Math.random() * 6) + 1;
            dice2 = Math.floor(Math.random() * 6) + 1;
    
            let diceDOM = document.querySelector('.dice');
            let diceDOMSec = document.querySelector('.dice2');
    
    
            diceDOM.style.display = 'block';
            diceDOM.src = 'dice-' + dice + '.png';
            diceDOMSec.style.display = 'block';
            diceDOMSec.src = 'dice-' + dice2 + '.png';
            
            // if dice is not equal to one
    
            if (dice === 6 && dice2 === 6 && lastDice === 6) {
                players[activePlayer] = 0;
                document.querySelector('#score--' + activePlayer).textContent = players[activePlayer];
    
            } else if (dice !== 1) {
                roundScore += dice + dice2;
                document.querySelector('#current--' + activePlayer).textContent = roundScore;
            } else {
                
                nextPlayer();
            }
            
            lastDice = dice;
        

       
    }

});

document.querySelector('.btn--hold').addEventListener('click', function(){
    // Add current score to GLOBAL score
    // let globalScore = 0;
    // let globalScore = 0;
    // globalScore += roundScore;
    // document.querySelector('#score--' + activePlayer).textContent = globalScore;
    /* Using this method is not sustainable because using a variable is not dynamic*/
    
    if (gamePlaying) {
        
        players[activePlayer] += roundScore;
        document.querySelector('#score--' + activePlayer).textContent = players[activePlayer];

        let input = document.querySelector('.highest_score').value;
        let winingScore;

        if (input) {
            winingScore = input;
        } else {
            winingScore = 100;
        }
        
        //check winner

        if (players[activePlayer] >= winingScore) {
    
            document.querySelector('#name--' + activePlayer).textContent = 'winner !!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');
            document.querySelector('.btn--roll').style.display = 'none';
            document.querySelector('.btn--hold').style.display = 'none';

            gamePlaying = false
    
        } else {
            //Next player
            nextPlayer();
        }
    
    }
   
});

document.querySelector('.btn--new').addEventListener('click', Init);

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current--0').textContent = '0';
    document.querySelector('#current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');

    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice2').style.display = 'none'
}

function Init() {
    players = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('#name--0').textContent = 'player 1';
    document.querySelector('#name--1').textContent = 'player 2';
    document.querySelector('.btn--roll').style.display = 'block';
    document.querySelector('.btn--hold').style.display = 'block';
    gamePlaying = true;
    

};

