const reservations = [
  { numero: 101, client: "Nadia", destination: "Bali", montant: 1800, statut: "Confirmée" },
  { numero: 102, client: "Karim", destination: "Rome", montant: 950, statut: "En attente" },
  { numero: 103, client: "Leila", destination: "Tokyo", montant: 2500, statut: "Confirmée" },
  { numero: 104, client: "Sami", destination: "Santorin", montant: 1200, statut: "Annulée" },
  { numero: 105, client: "Amira", destination: "Djerba", montant: 500, statut: "Confirmée" }
];
const confirme=reservations.filter(x=>x.statut==="Confirmée");
console.log(confirme);
const names=reservations.map(x=>x.client);
console.log(names);
const recherche=reservations.find(x => x.numero === 103);
console.log(recherche);
const montant=confirme.reduce((totale, x) => totale + x.montant, 0);
console.log(montant);
const verif=reservations.every(x=>x.statut==="Confirmée");
console.log(verif);
const tab2=reservations.map(x=>({client:x.client, voyage:x.destination}));
console.log(tab2);