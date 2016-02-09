define(["cardlist", "decklists"], function(Cardlist, Decklists) {

    var Game = function(deck1, deck2) {
        var Player1 = new Player(deck1);
        var Player2 = new Player(deck2);
        
        return {
            Player1: Player1,
            Player2: Player2
        }
    }

    var Player = function(deck) {

        var hand = []; //list of cards
        var deck = buildDeck(deck); //convert names list to objects list
        var curmana = 0;
        var maxmana = 0;
        var minions = []; //list of cards
        var health = 30;
        var attack = 0;
        var drawCard = function() {
            hand.push(deck.pop());
        }
        
        return {
            hand: hand,
            deck:deck,
            curmana: curmana,
            maxmana: maxmana,
            minions: minions,
            health: health,
            attack: attack,
            drawCard: drawCard
        }

    }

    function buildDeck(cardList){
        var deck = [];
        for(var i = 0; i < cardList.length; i++)
        {
            var name = cardList[i];
            var cardSchema = Cardlist[name];
            var card = Object.assign({}, cardSchema);
            deck.push(card);
        }
        
        
        return deck;
    }
    
    var myFirstDeckBeGentle = buildDeck(Decklists.deck1);
    console.log(myFirstDeckBeGentle);
    
    
    
    

    return {
        Game : Game,
        
    }
    
    
    
    
    

});