// 29 Tier 1 Champs, 10 Tier 5 Champs
function champ_pool(unit_tier) {
    champ_pool_per_tier = [29, 22, 16, 12, 10];
    return champ_pool_per_tier[unit_tier - 1];
}

// 12 different Tier 1 Champs exist
function unique_champs(unit_tier) {
    champ_count_per_tier = [12, 13, 12, 10, 7];
    return champ_count_per_tier[unit_tier - 1];
}


function throw_chance(player_level, unit_tier) {
    // chances[2][1] = chance to roll t2 unit on level 3
    chances = [
        [1.00, 0.00, 0.00, 0.00, 0.00],
        [1.00, 0.00, 0.00, 0.00, 0.00],
        [0.70, 0.25, 0.05, 0, 00, 0.00],
        [0.50, 0.35, 0.15, 0, 00, 0.00],
        [0.35, 0.35, 0.25, 0.05, 0.00],
        [0.25, 0.35, 0.30, 0.10, 0.00],
        [0.20, 0.30, 0.33, 0.15, 0.02],
        [0.15, 0.20, 0.35, 0.24, 0.06],
        [0.10, 0.15, 0.30, 0.30, 0.15]
    ];
    return chances[player_level - 1][unit_tier - 1];
}

function miss_chance(hit_chance, times) {
    not_hit_chance_per_throw = 1 - hit_chance;
    return Math.pow(not_hit_chance_per_throw, times);
}


function chance_calc(level, tier, gold, champ_picked, other_champs_picked) {
    // 2 gold = 1 roll, 1 roll = 5 throws
    times = (gold / 2) * 5;
    amount_of_hits = champ_pool(tier) - champ_picked;
    amount_of_all = (unique_champs(tier) * champ_pool(tier)) - other_champs_picked - champ_picked;
    hit_chance_per_throw = throw_chance(level, tier) * (amount_of_hits / amount_of_all);
    missing_chance = miss_chance(hit_chance_per_throw, times);
    hit_chance_in_total = 1 - missing_chance;

    return hit_chance_in_total;

}

function tftUnluckCalc() {

    var t = document.getElementById("tier");
    var tier = t.options[t.selectedIndex].value;

    var l = document.getElementById("level");
    var level = l.options[l.selectedIndex].value;

    var gold = document.getElementById("gold").value;
    var champ_picked = document.getElementById("champ_picked").value;
    var other_champs_picked = document.getElementById("other_champs_picked").value;

    if (isNaN(tier)) {
        alert("Please select the Tier of your desired Champion.");
        return false;
    }

    if (isNaN(level)) {
        alert("Please select your Level.");
        return false;
    }


    var max_champ_picked = champ_pool(tier);
    if ((champ_picked < 0) || (champ_picked > max_champ_picked)) {
        alert("Amount of times your desired Champion has already been picked must be between 0 and " + max_champ_picked + ".");
        return false;
    }

    var max_other_champs_picked = (champ_pool(tier) * unique_champs(tier)) - champ_picked;
    if ((other_champs_picked < 0) || (other_champs_picked > max_other_champs_picked)) {
        alert("Amount of times other Champions of the same Tier have already been picked must be between 0 and " + max_other_champs_picked + ".");
        return false;
    }

    console.log(isNaN(tier))
    console.log(level)
    console.log(gold)
    console.log(champ_picked)
    console.log(other_champs_picked)
    var chance = chance_calc(level, tier, gold, champ_picked, other_champs_picked);
    chance = chance * 100;
    chance = parseFloat(chance).toFixed(2) + "%";
    document.getElementById("custom-tft-scenario-result").innerHTML = chance;
}