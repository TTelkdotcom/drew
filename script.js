

countries = [
    country0 = {
        name: "Germany",
        alliance: true,
        aname: "alliance0",
        ideology: "facist",
        colonies: ["country5", "country6"],
        alive: true,
        strength: 6,
    },

    country1 = {
        name: "UK",
        alliance: false,
        aname: "",
        ideology: "monarchist",
        colonies: [],
        alive: true,
        strength: 4,
    },

    country2 = {
        name: "USSR",
        alliance: false,
        aname: "",
        ideology: "communist",
        colonies: [],
        alive: true,
        strength: 7,
    },

    country3 = {
        name: "USA",
        alliance: false,
        aname: "",
        ideology: "democratic",
        colonies: [],
        alive: true,
        strength: 9,
    },

    country4 = {
        name: "Italy",
        alliance: true,
        aname: "alliance0",
        ideology: "facist",
        colonies: [],
        alive: true,
        strength: 3,
    },

    country5 = {
        name: "France",
        alliance: true,
        aname: "alliance0",
        ideology: "facist",
        colonies: [],
        alive: false,
        strength: 4,
    },
];

alliances = [
    alliance0 = {
        name: "Axis",
        ideology: "facist",
        strength: 9,
        members: [
            "country0",
            "country4"
        ],
    },

    alliance1 = {
        name: "Allies",
        ideology: "facist",
        strength: 20,
        members: [
            "country1",
            "country2",
            "country3"
        ],
    },
];

log = [];


// ACTIONS

// War (Civil war - Attack)
// Alliance (Successful (same ideology) - Failure)
// Ideology


// POINTS

// Winning a war = +2
// Entering an alliance = +1
// Changing ideology = -1
// Civil war = -4


// ATTACK

// Attacker > Defender = Win for attacker
// Attacker = Defender = Loss for attacker
// Attacker < Defender = Loss of attacker

function create() {
    for (i = 0; i < alliances.length; i++) {
        this["alliance" + i].strength = 0;
        console.log(i);
        console.log(this["alliance" + i].strength);
        let memlength = this["alliance" + i].members.length;
        for (i = 0; i < memlength; i++) {
            this["alliance" + i].strength = this[this["alliance" + i].members[i]].strength + this["alliance" + i].strength;
        }

        console.log("test");
        console.log(this["alliance" + i].name);
        console.log(this["alliance" + i].ideology);
        console.log(this["alliance" + i].strength);
    }
}


function generate() {
    // generate random people

    const players = [];

    for (let i = 0; i <= dares.length; i++) {
        num = random(0, dares.length - 1);
        if (dares[num].nom <= boys.length && dares[num].nof <= girls.length && dares[num].active == true) {
            dare = "dare" + num;
            break;
        } else {
            console.error('no matching dare found', 400);
            break;
        }
    };

    for (let i = 0; i < this[dare].nom;) {
        var num = random(0, boys.length - 1);

        if (boys[num].active == true && players.indexOf("boy" + num) == -1) {
            players[players.length] = "boy" + num;
            i++;
        }
    };

    for (let i = 0; i < this[dare].nof;) {
        var num = random(0, girls.length - 1);

        if (girls[num].active == true && players.indexOf("girl" + num) == -1) {
            players[players.length] = "girl" + num;
            i++;
        }
    };

    for (let i = 0; i < this[dare].nou;) {
        if (random(1, 2) == 1) {
            var num = random(0, boys.length - 1);

            if (boys[num].active == true && players.indexOf("boy" + num) == -1) {
                players[players.length] = "boy" + num;
                i++;
            }
        } else {
            var num = random(0, girls.length - 1);

            if (girls[num].active == true && players.indexOf("girl" + num) == -1) {
                players[players.length] = "girl" + num;
                i++;
            }
        }
    };

    let body = this[dare].body;

    for (let i = 0; i < players.length; i++) {
        while (body.indexOf("P" + i) >= 0) {

            let plsuffix = body.slice(body.indexOf("P" + i) + 3, body.indexOf("P" + i) + 5);

            if (players[i].charAt(0) == "b") {
                plprefix = "boy";
            } else {
                plprefix = "girl";
            }

            if (plsuffix == 'fn') {
                body = body.replaceAll('P' + i + '-' + plsuffix, this[players[i]].fname);
            } else if (plsuffix == 'ln') {
                body = body.replaceAll('P' + i + '-' + plsuffix, this[players[i]].lname);
            } else if (plsuffix == 'cn') {
                body = body.replaceAll('P' + i + '-' + plsuffix, this[players[i]].fname + " " + this[players[i]].lname);
            } else if (plsuffix == 'ho') {
                body = body.replaceAll('P' + i + '-' + plsuffix, this[players[i]].hoodie);
            } else if (plsuffix == 'ja') {
                body = body.replaceAll('P' + i + '-' + plsuffix, this[players[i]].jacket);
            } else if (plsuffix == 'ag') {
                body = body.replaceAll('P' + i + '-' + plsuffix, this[players[i]].age);
            }

        }
    }

    document.getElementById("title").innerHTML = this[dare].title;
    document.getElementById("body").innerHTML = body;

    let playerids = "";

    for (let i = 0; i < players.length; i++) {
        playerids = playerids + "<h3 class='text-xl font-bold'>" + this[players[i]].fname + " " + this[players[i]].lname + "</h3> \
        <p>" + this[players[i]].desc + "</p> <p> <b class='font-bold'>Age:</b> " + this[players[i]].age + "</p>";
    }

    document.getElementById("players").innerHTML = playerids;
};

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};