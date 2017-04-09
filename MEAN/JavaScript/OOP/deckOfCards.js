function DeckConstructor() {
    if (!(this instanceof DeckConstructor)) {
        return new DeckConstructor();
    }
    var suit = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    var names = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
    this.cards = [];
    this.dealt = 0
    for (var i = 0; i < 4; i++) {
        for (var n = 0; n < names.length; n++) {
            this.cards.push((suit[i] + " " + names[n]));
        }
    }
    this.reset = function() {
        this.cards = []
        this.dealt = 0
        for (var i = 0; i < 4; i++) {
            for (var n = 0; n < names.length; n++) {
                this.cards.push((suit[i] + " " + names[n]));
            }
        }
    }
}

DeckConstructor.prototype.deal = function() {
    if (this.dealt === 52) {
        this.reset()
    }
    index = Math.floor(Math.random() * (52 - this.dealt));
    card = this.cards[index];
    this.cards.splice(index, 1);
    this.dealt++;
    return card;
};

function PlayerConstructor(name) {
    if (!(this instanceof PlayerConstructor)) {
        return new PlayerConstructor(name);
    }
    if (typeof deck === "undefined") {
        deck = new DeckConstructor();
    }
    this.name = name;
    this.hand = [deck.deal(), deck.deal()];
}

PlayerConstructor.prototype.hitMe = function() {
    this.hand.push(deck.deal());
    return this;
};
PlayerConstructor.prototype.discard = function(index) {
    if (index < this.hand.length) {
        this.hand.splice(index, 1);
    } else {
        console.log("You don't have that many cards")
    }
    return this;
}
PlayerConstructor.prototype.seeHand = function() {
    console.log(this.hand);
    return this;
};

jake = new PlayerConstructor()
jake.hitMe()
jake.seeHand()
jake.discard(1)
jake.seeHand()
