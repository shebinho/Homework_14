$(document).ready(function(){
    function Person(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = function(){
            
          return this.firstName + " " +this.lastName;
        }
    }

    
    let player1 = new Person("Mario", "Tevdovski");
    let player2 = new Person("Dejan", "Zenovic");
    let player3 = new Person ("Velice", "Sumulikoski");
    let player4 = new Person("Mitko", "Mitkov");

    function Players(){
        let playersArray = [];
        this.addPlayers = function(players){
            playersArray.push(players);
            console.log(`Start the Game : ${players.fullName()}`);
            
        }
                
            
        this.removePlayers = function(players){
            let i = playersArray.indexOf();
            playersArray.splice(i,1);
            console.log(`Game over for this player : ${players.fullName()}`);
          
        }
        this.getPlayers = function(){
            playersArray.forEach(function(remaining){
                console.log(`The remaining players : ${remaining.fullName()}`)
            })
        }
        }

    
    
    
    let player = new Players();
    player.addPlayers(player1);
    player.addPlayers(player2);
    player.addPlayers(player3);
    player.addPlayers(player4);
    
    player.removePlayers(player2);
    player.removePlayers(player4);
    player.getPlayers();
});

