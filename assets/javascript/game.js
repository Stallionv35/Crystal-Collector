//Crystal Values
    var crystals = {
        diamond:
        {
          name: "diamond",
          value: 0
        },
        ruby:
        {
          name: "ruby",
          value: 0
        },
        emerald:
        {
          emerald: "emerald",
          value: 0
        },
        sapphire:
        {
          name: "yellow",
          value: 0
        }
    
      };

    //Current Objective Number
    var objNumber = Math.floor(Math.random() * 40) + 1;
    $(".detail-interface").prepend('<p class="obj-number">Current Objective: ' + objNumber + '</p>');  

    //Crystal Point Function
    var crystalRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

    //MyScore Number
    var yourScore = 0;

    // Win & Losses Score
    var wins = 0;
    var losses = 0;

    



    // Respond to clicks on the crystals
    crystals.diamond.value = crystalRandom(1,16);
    $('.diamond').click(function(){
        crystalPoints(crystals.ruby);
    });
    crystals.ruby.value = crystalRandom(1,16);
    $('.ruby').click(function(){
        crystalPoints(crystals.ruby);
    });
    crystals.emerald.value = crystalRandom(1,16);
    $('.emerald').click(function(){
        crystalPoints(crystals.ruby);
    });
    crystals.sapphire.value = crystalRandom(1,16);
    $('.sapphire').click(function(){
        crystalPoints(crystals.sapphire);
    });

    // Respond to clicks on the crystals
   var crystalPoints = function(clickedCrystal) {
        yourScore += clickedCrystal.value;
        $(".user-score").text("Current Score " + yourScore);   
        };


    /// Loss & Win count
    var scoreCount = function(){
        if (objNumb === yourScore){
        wins++;
        $(".wins").text(wins);
        }
    }
  
