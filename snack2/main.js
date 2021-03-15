/*Snack2) Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

 const squadre = [
        {
        nome : 'fiorentina',
        punti : 0,
        falli : 0
    },
    {
        nome : 'milan',
        punti : 0,
        falli : 0
    },
    {
        nome : 'parma',
        punti : 0,
        falli : 0
    },
    {
        nome : 'napoli',
        punti : 0,
        falli : 0
    },
    {
        nome : 'palermo',
        punti : 0,
        falli : 0
    },
    {
        nome : 'lazio',
        punti : 0,
        falli : 0
    },
];
//genero i punti e i falli random
squadre.forEach((element,index) => {

    element.punti = Math.floor(Math.random() * 10);
    element.falli = Math.floor(Math.random() * 40);
    var {nome,falli} = element;
    arrayVuoto.push({nome,falli});
});
console.log(squadre);

const arrayVuoto = [];

/*var {nome,falli} = element;
arrayVuoto.push({nome,falli});*/

console.log(arrayVuoto);