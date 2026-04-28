let school = {
    name: "Penjamin",
    "average class size": 7,
    mascot: "Ben",
};

let string = `${school.name} has an average class size of ${school["average class size"]} and their mascot is a ${school.mascot}`;
document.getElementById('result').innerHTML = string;