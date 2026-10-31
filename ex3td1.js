const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
const [p1,...reste]=pays; // les 3points sinifie afficher le reste(pays[1..4]) dans un tableau et faire une copie de lui
console.log(p1);
console.log(reste);
const[p,p0]=pays;
console.log(p,p0);
reste[0]="tunisie";
console.log(reste); // pays est une copie simple 
console.log(pays);
const p22=pays.map(p=>p);
p22[0]="tunisie";
console.log(p22);
console.log(pays);




const personne=[{nom:"ahmed", ville:"tunisie", age:23},{nom:"takwa", ville:"bizerte",age:21},{nom:"eya", ville:"nabeul",age:20}]
//const[{nom}]=personne;
const{nom}=personne[0];
const{nom:identifiant}=personne[0];
console.log(identifiant);
const names=personne.map(({nom})=>nom);
console.log(names);
const mon_age=personne.map(({nom,age})=>({nom,age}));
console.log(nom,mon_age);
// on fait l'ajout d'un nouveau personne dans le tableau personne
const nvpersonne={nom:"zina", ville:"sfax", age:22}
const personne2=[...personne,nvpersonne];
console.log(personne2);

const voyage = {
    destination: "Bali",
    prix: 1800,
    duree: 10,
    transport: "Avion",
    hotel: "5 étoiles"
};
// 1. Extraire destination et prix
const { destination, prix } = voyage;
console.log(destination); // Bali
console.log(prix);        // 1800

// 2. Extraire destination dans une variable appelée ville
const { destination: ville } = voyage;
console.log(ville); // Bali

// 3. Extraire prix et duree avec des valeurs par défaut
const { prix: prixVoyage = 2000, duree: dureeVoyage = 7 } = voyage;
console.log(prixVoyage);  // 1800
console.log(dureeVoyage); // 10

// 4. Fonction avec destructuring directement dans les paramètres
function afficherVoyage({ destination, prix, duree, transport, hotel }) {
    console.log("Destination :", destination);
    console.log("Prix :", prix);
    console.log("Durée :", duree);
    console.log("Transport :", transport);
    console.log("Hôtel :", hotel);
}
afficherVoyage(voyage);

