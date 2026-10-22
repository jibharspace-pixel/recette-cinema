
const prix1 = 1500;
const prix2 = 2500;
const reduction = 500;
let Nb1500 = 0;
let Nb2500 = 0;
let Recette = 0;

for (let age = 11; age <= 20; age = age + 1) {
    let prix;

    if (age < 16) {
        prix = prix1;
        Nb1500++;
    } else {
        prix = prix2;
        Nb2500++;
    }

    //  prix pour les 18 ans ou plus
    if (age >= 18) {
        prix = prix - reduction;
    }

    console.log(age);
    console.log("Prix :", prix, "FCFA");
    Recette = Recette + prix;
}

console.log("Recette totale :", Recette, "FCFA");
console.log("Le nombre de billets vendus à 1500 FCFA :", Nb1500);
console.log("Le nombre de billets vendus à 2500 FCFA :", Nb2500);
