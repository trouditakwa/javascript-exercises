const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

const copie=[...destinationsEurope];
console.log(copie);

const fusionner=[...destinationsEurope,...destinationsAsie];
console.log(fusionner);

const nvdestinations=["lisbonne",...destinationsEurope];
console.log(nvdestinations);

const destinations1=[...destinationsEurope,"londres"];
console.log(destinations1);
const saufparis=fusionner.filter(x=>x!=="Paris"); // un nv tab sans paris
console.log(saufparis);

const reservation = {
numero: 201,
client: "Nadia",
destination: "Bali",
statut: "En attente"
};

const reservationcopie={...reservation};
console.log(reservationcopie);
const reservationmodifiee={...reservation, statut:"Confirmée"};
console.log(reservationmodifiee);
const ajout={...reservation,assurance: true};
console.log(ajout);
const nvreservation={...reservation,statut:"Confirmée",destination:"Rome"};
console.log(nvreservation);




