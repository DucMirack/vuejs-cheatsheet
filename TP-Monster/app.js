new Vue({
  el: '#app',
  data: {
  	showNewGame: false,
    showLogs: false,
    heroLife: 100,
    monsterLife: 100,
    logs: []
  },
  computed: {
    isGameFinished: function() {
      return this.heroLife <= 0 || this.monsterLife <= 0
    }
  },
  methods: {
      executeRound: function(action) {
        this.showLogs = true
        if (action.includes('Attack')) {
          monsterDamage = 0
          heroDamage = 0
          if (action == "normalAttack") {
            monsterDamage = Math.floor(Math.random() * 10) + 1;
            heroDamage = Math.floor(Math.random() * 10) + 1;
          }
          else {
            monsterDamage = Math.floor(Math.random() * 15) + 1;
            heroDamage = Math.floor(Math.random() * 15) + 1;
          }
          this.monsterLife -= heroDamage
          this.heroLife -= heroDamage
          this.logs.unshift("Player hits monster for " + heroDamage)
          this.logs.unshift("Monster hits player for " + monsterDamage)
        }
        else if (action == "heal") {
          heroHeal = Math.floor(Math.random() * 10) + 1;
          monsterDamage = Math.floor(Math.random() * 10) + 1;
          this.heroLife += heroHeal
          this.heroLife -= monsterDamage
          this.logs.unshift("Player heals himself for " + heroHeal)
          this.logs.unshift("Monster hits player for " + monsterDamage)
        }
        if (this.isGameFinished){
          this.finishGame()
        }
      },
      resetGame: function(){
        this.heroLife = 100,
        this.monsterLife = 100,
        this.showNewGame = false,
        this.showLogs = false
      },
      finishGame: function() {
        if (confirm("End of game, restart ?")){
          this.resetGame()
        }
      }
  }
});
