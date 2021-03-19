/*Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter*/


var myArray = [1,2,3,4,5,6,7,8];
var one = 2;
var two = 6;


function myFunction (array,one,two) {

return array.filter((element,index) =>{

    return index > one && index < two;
})
}

console.log(myfunction(array,one,two));




