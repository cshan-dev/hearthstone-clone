requirejs(["model", "view", "decklists"], function(Model, View, Decks){
    var gameState;
    console.log("Hello world");
    
    function turn(game){
        var player;
        if (!game.turn) {
            game.turn = 0;
            player = game.Player1;
        } else if (game.turn === 0){
            player = game.Player1;
        } else if (game.turn === 1){
            player = game.Player2;
        } else 
        {
            console.log("OH NOO WHAT HAPPENED");
        }
        player.minions.forEach(function(minion){
            minion.canAttack = true;
        });
        View.setupUI(player); //make buttons for attacking, end of turn, etc;
        View.update(); 
       game.turn = (game.turn + 1) % 2; 
    }
   
   function endTurn(){
        View.update(); 
       turn(gameState);
   }
   
   function playCard(player, cardSpot){
       var played = false;
       if(player.hand.length <= cardSpot)
       {
           console.log("stop cheating u dont have a card ther");
           return false; // dummy
       }
       if(player.curmana < player.hand[cardSpot].cost)
       {
           console.log("you don have enuf mana");
           return false;
       }
       if(player.minions.length >= 7)
       {
           console.log("you have 2 many minins");
           return false;
       }
       player.curmana =- player.hand[cardSpot].cost;
       player.minions.push(player.hand[cardSpot]);
       player.hand.splice(cardSpot, 1);
        View.update(); 
       return played; //return true if no errors and the card successfully was played, false if not and the card was not played
   }
   function attackDude(player, dudeSpot, attackSpot, enemyPlayer){ // attackSpot is 0-6 minions, 7- enemy hero
       
        View.update(); 
        
        var dude = player.minions[dudeSpot];
        
        if(dude.canAttack != true)
        {
            console.log("That minion is not ready to attack");
            return false;
        }
        if((attackSpot > 7) || (attackSpot < 0))
        {
            console.log("What no thats not a thing you can attack wtf");
            return false;
        }
        if(attackSpot == 7)
        {
            enemyPlayer.health =- dude.attack;
            if(enemyPlayer.health <= 0){ // That player loses!
                console.log("the turn player has won!");
            }
            return true;
        } else if(enemyPlayer.minions.length >= attackSpot)
        {
            console.log("there is nothing there to attack!");
            return false;
        } else
        {
            var foe = enemyPlayer.minions[attackSpot];
            foe.health =- dude.attack;
            dude.health =- foe.attack;
            dude.canAttack = false;
            if(foe.health <=0){
                enemyPlayer.minions.splice(attackSpot, 1);
            }
            if(dude.health <=0){
                player.minions.splice(dudeSpot, 1);
            }
            return true;
        }
        console.log("oh dear. something odd has happened during a minion attack...");
        return false;
   }
    
    (function init(){
        
        gameState = new Model.Game(Decks.deck1, Decks.deck1);
        turn(gameState);
        console.log("weo");
        console.log(gameState);
        
        //gameState.Player1.minions.push();
        
    })();
    
    
});