new Vue({
    el: '#app',
    data: {
        gameStart: false,
        playerHealth: 100,
        monsterHealth: 100,
        gameStats: []
    },
    computed: {
        playerHealthStatus: function() {
            return this.playerHealth > 0 ? 'green' : 'red';
        },
        monsterHealthStatus: function() {
            return this.monsterHealth > 0 ? 'green' : 'red';
        }
    },
    methods: {
        startGame: function() {
            this.gameStart = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameStats = []
        },

        attack: function() {
            const playerStats = { min: 3, max: 10 };
            const monsterStats = { min: 5, max: 12 };
            this.generalAttack(playerStats, monsterStats);
        },

        specialAttack: function() {
            this.generalAttack([6, 20], [5, 12])
         },

        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },

        recordTurn: function(src, dest, amount) {
            this.gameStats.push({
                'src': src,
                'dest': dest,
                'amount': amount
            });
        },

        generalAttack: function(playerStats, monsterStats) {
            const playerMin = playerStats[0]
            const playerMax = playerStats[1]
            const monsterMin = monsterStats[0]
            const monsterMax = monsterStats[1]

            const playerDamage = this.calculateDamage(playerMin, playerMax);
            const monsterDamage = this.calculateDamage(monsterMin, monsterMax);

            this.playerHealth -= monsterDamage;
            this.recordTurn('MONSTER', 'PLAYER', monsterDamage);
            this.monsterHealth -= playerDamage;
            this.recordTurn('PLAYER', 'MONSTER', playerDamage);
        },

        heal: function() {
            const monsterDamage = this.calculateDamage(5, 12);

            this.playerHealth += 10;
            if (this.playerHealth > 100) {
                this.playerHealth = 100;
            }
            this.recordTurn('PLAYER', 'PLAYER', playerHeal);
            this.playerHealth -= monsterDamage;
            this.recordTurn('MONSTER', 'PLAYER', monsterDamage);
        }
    },

    watch: {
        playerHealth: function(value) {
            if(value <= 0) {
                if(confirm("You lost! Play again?")) {
                    this.startGame();
                } else {
                    this.gameStart = false;
                }
            }
        },
        monsterHealth: function(value) {
            if (value <= 0) {
                if (confirm("You won! Play again?")) {
                    this.startGame();
                } else {
                    this.gameStart = false;
                }
            }
        }
    }
});
