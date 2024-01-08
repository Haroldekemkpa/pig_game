/* WHAT TO LEARN


PART 1:
1: How to create our fundaamental game variable;

2: How to generate a random number: use the math object (math.random())
    to get random numbers witin a certain range, you multiply the math object
    with the nth value. example nth value = 6; (math.random()*6 + 1)  in order to remove 
    and math.floor() to make it an integer.
    THUS: math.floor(math.random()*6) + 1;

3: How to manipulate the DOM: To get access to the DOM, you use the 
    document.querySelector(); the .querySelector(); is easy to use because
    it allows us select elements ass they are in the DOM. the .querySelector(); only selects 
    the first element, id or class passed, this can be corrected using the 
    .querySelectorAll();
    
    The .querrySelector can be used to read from the DOM or write on the DOM.
    document.querySelector('#fish').textContent = 'fish'; (write).
    document.querySelector('#fish').textContent; (read).
    
    ADD HTML
    document.querySelector('#fish').innerHTML = '<em> r </em>; (read).

NB: the .innerHTML is used to write html to the DOM, while the .textCotent 
    is used to chage or read text on or from the dom.

4: How to read from the DOM: 
    The .querrySelector can be used to read from the DOM or write on the DOM.
    document.querySelector('#fish').textContent; (read).

5: How to change CSS styles:
    document.querySelector('#fish').style.display = 'none';

*/


/* WHAT TO LEARN 
PART 2:
1: How to set up event listners;

2: What a callback function is:
    A callback function is a function that is called by another function.
    it is passed into another function as an arguemnet. example:
    
    function btn() {
        console.log('food;)
    }
    
    .addEventListener('click', btn);

3: What an anonymous function is:
    An anonimous function is a function without a name, hence can not be reused 
    commonly used in event listeners
    .addeventListener('click', funtion() {
         console.log('food;)
    });

4: Another way to select elements by ID: .getElementByID();

5: How to change the mimage in an <img> element: 
    document.querySelector('.img').src = 'dice-1' + .png.
    to add an image to the dom you select the img class, id or element from the dom
    using the .querrySelector() or the .getElementByID();

*/


/* WHAT TO LEARN 
PART 3:

1: How the ternary operator works;
2: How to add, remove and toggle HTML classes: 

    in order to add an html class to another you use the 
    classList.add('.class'),

    to remove a class you use the 
    classList.remove('class')
    document.querrySelector('.class').classList.add('.addClass');
    document.querrySelector('.class').classList.remove('.addClass');
    document.querrySelector('.class').classList.toggle('.addClass'); to toggle
    ;
*/

let players, roundScore, activePlayer, gamePlaying;

players = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;

// document.querySelector('.dice').style.display = 'none';

// document.getElementById('score--0').textContent = '0';
// document.getElementById('score--1').textContent = '0';
// document.getElementById('current--0').textContent = '0';
// document.getElementById('current--1').textContent = '0';

 Init();

document.querySelector('.btn--roll').addEventListener('click', function(){
    
    if(gamePlaying) {
        let dice;
        dice = Math.floor(Math.random() * 6) + 1;

        let diceDOM = document.querySelector('.dice');

        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // if dice is not equal to one
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = roundScore
        } else {
            
            nextPlayer();
        }
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
        
        //check winner
        if (players[activePlayer] >= 20) {
    
            document.querySelector('#name--' + activePlayer).textContent = 'winner !!!';
            document.querySelector('.dice').style.display = 'none';
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
}

function Init() {
    players = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

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




// document.querySelector('#current--' + activePlayer).textContent = dice;
// document.querySelector('.dice').style.display = 'none';