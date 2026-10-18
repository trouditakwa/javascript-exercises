const destinations = [
  { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, disponible: true },
  { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, disponible: true },
  { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, disponible: false },
  { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, disponible: true },
  { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, disponible: true },
  { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, disponible: false }
];
destinations.forEach((x) => console.log(x.ville));
const names=destinations.map(x=>x.ville); // si on a plus des objets on utilise{} pour retourner
console.log(names);
const pays=destinations.filter(x=>x.prix<1500);
console.log(pays);
const recherche=destinations.find(x=>x.id===3); // retourne un ensemble de tab
console.log(recherche);
const tokyo=destinations.findIndex(x=>x.ville==="Tokyo");//retourne une seule chose
console.log(tokyo);
const dispo=destinations.some(x=>x.disponible===true);// il vérifie au moins une seule
console.log(dispo);
const verif=destinations.every(x=>x.prix>0); 
console.log(verif);
const budget=destinations.reduce((totale,x)=>totale+x.prix,0); // elle fait le calcule 
console.log(budget);




