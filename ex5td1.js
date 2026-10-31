const favoris = [
{ id: 1, ville: "Venise", pays: "Italie", visite: false },
{ id: 2, ville: "Marrakech", pays: "Maroc", visite: true },
{ id: 3, ville: "Maldives", pays: "Maldives", visite: false },
{ id: 4, ville: "Barcelone", pays: "Espagne", visite: true }
];
favoris.forEach(({ ville, pays }) => { console.log(ville,"-", pays); });
const visites=favoris.filter(x=>x.visite===false);
console.log(visites);
const favorites=favoris.map(x=>x.ville);
console.log(favorites);
const ids=favoris.find(x=>x.id===3);
console.log(ids);
const nbvisites=favoris.reduce((totale, x) => totale + (x.visite ? 1 : 0), 0);
console.log(nbvisites);
const ajout={id:5, ville:"Paris", pays:"France", visite:true};
const favoris2=[...favoris,ajout];
console.log(favoris2);

const modifier=favoris.map(x=>{
    if (x.id === 1) {
        return { ...x, visite: true };
    }
    return x;
});
console.log(modifier);

const supprime=favoris.filter(x=>x.id!==2);
console.log(supprime);



