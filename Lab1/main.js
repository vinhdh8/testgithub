const game = {
    team1: 'Bayer Munich',
    tema2: 'PSG',
    player: [
        [
            'Neuer',
            'Pavard',
            'Ronaldo',
            'Messi',
            'Neymar',
            'Salah',
            'Mbappé',
            'Kimmich',
            'Lewandowski',
            'Muller',
            'Davies',
        ],
        [
            'Navas',
            'Virgil van Dijk',
            'Kane',
            'Caicedo',
            'Kevin De Bruyne',
            'Mane',
            'Pulisic',
            'Bale',
            'Pedri',
            'Son Heung-min',
            'Eriksen',
        ],
    ],
    score: '2:0',
    scored: ['Messi','Ronaldo'],
    date: '9, Tháng 2, 2024',
    odds:{
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

//LAB 1.1
// 1. 

const [players1, players2] = game.player;
console.log(players1, players2);

// 2.
const [gk, ... fieldePlayers] = players1;
console.log(gk, fieldePlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho','Perisic']

// 5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
const printGoats = function(... player){
    console.log(player);
    console.log(`${player.length} Cầu thủ đã ghi bàn`);
};
printGoats(...game.scored);

// 7.
team1 < team2 && console.log('Đội 1 có khả năng thắng cao hơn');
team1 > team2 && console.log('Đội 2 có khả năng thắng cao hơn');

//LAB 1.2

// 1.
for (const [i, player] of game.scored.entries())
    console.log(`Bàn thắng ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}



