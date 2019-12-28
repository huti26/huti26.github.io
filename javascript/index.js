function calc(){
    var tier = parseFloat(document.getElementById('tier').value);
    var level = parseFloat(document.getElementById('level').value);
    var gold = parseFloat(document.getElementById('gold').value);
    var champ_picked = parseFloat(document.getElementById('champ_picked').value);
    var other_champs_picked = parseFloat(document.getElementById('other_champs_picked').value);


    
    document.getElementById('result').value = tier + level;

    
}