$(document).ready(function() {
    $('#Pokemon1').html(game.players[0].name + ' plays ' + game.players[0].hand[0].name);
    $('#Pokemon2').html(game.players[1].name + ' plays ' + game.players[1].hand[0].name);
    var pokemon1 = game.players[0].hand[0].hp
    var pokemon2 = game.players[1].hand[0].hp
    if (pokemon1 > pokemon2) {
        $('#winner').html(game.players[0].name + ' wins with ' + game.players[0].hand[0].name + '!');
    } else if (pokemon1 < pokemon2) {
        $('#winner').html(game.players[1].name + ' wins with ' + game.players[1].hand[0].name + '!');
    } else {
        $('#winner').html('Draw!');
    }
});

var game = {
    players: [],
    addPlayer: function(name) {
        new_player = playerConstructor(name);
        game.players.push(new_player);
    }
};

function playerConstructor(name) {
    player = {};
    player.name = name;
    player.hand = [];
    player.addCard = function() {
        var card;
        var pokemon = Math.floor(Math.random() * 150) + 1;
        $.ajax({
            async: false,
            url: 'http://pokeapi.co/api/v1/pokemon/' + pokemon + '/',
            success: function(result) {
                card = result;
            }
        });
        player.hand.push(card);
    };
    return player;
};

game.addPlayer('Jake')
game.players[0].addCard()
game.addPlayer('Jingles')
game.players[1].addCard()
