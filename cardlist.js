define([], function() {
    var Card = function(name, cost, attack, health) {
        return {
            name: name,
            cost: cost,
            attack: attack,
            health: health
        }
    }
    return {
        corey: new Card("Corey", 10, 3, 14),
        adyn: new Card("Adyn", 5, 5, 5),
        remi: new Card("Remi", 1, 3, 1),
        finn: new Card("Finn", 8, 1, 20),
        taylit: new Card("Taylit", 6, 7, 5),
        regi: new Card("Regi", 2, 4, 1),
        josh: new Card("Josh", 4, 4, 5),
        sean: new Card("sean", 3, 3, 4),
        angie: new Card("Angie", 3, 4, 3),
        jesse: new Card("Jesse", 6, 6, 8),
        szozy: new Card("Alex", 9, 8, 8),
        nalan: new Card("Nalan", 2, 2, 3),
        chrisfrick: new Card("Frick", 7, 10, 3),
        astin: new Card("Astin", 3, 2, 5),
        nate: new Card("Nate", 1, 2, 1),
        helen: new Card("Helen", 1, 1, 2),
        moxi: new Card("Moxi", 2, 1, 3),
        eric: new Card("Eric", 5, 6, 4),
        dodger: new Card("Doog", 0, 1, 1),
        dogs: new Card("Dogs", 3, 3, 3),
        nia: new Card("Nia", 5, 4, 6),
        jess: new Card("Jess", 4, 5, 4),
        david: new Card("David", 6, 8, 5),
        weed: new Card("Weed", 1, 1, 1),
        remi2: new Card("remi2", 3, 5, 2),
        tilt: new Card("tilt", 10, 20, 1)
    }

});