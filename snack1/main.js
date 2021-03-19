//Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
 //Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

 const biciCorsa = [

    {
        nome: 'BIANCHI',
        peso: 17
    },
    {
        nome: 'ATALA',
        peso: 16
    },
    {
        nome: 'PINARELLO',
        peso: 12    },
    {
        nome: 'FANTIC',
        peso: 21
    },
    {
        nome: 'NILOX',
        peso: 14
    },
    {
        nome: 'TORPADO',
        peso: 19
    },
    {
        nome: 'CARRERA',
        peso: 28
    },
    {
        nome: 'BOTTECCHIA',
        peso: 11
    }

 ];

//"con destructuring

 const [bianchi,atala,pinarello,fantic,nilox,torpado,carrera,bottecchia] = biciCorsa;
 
 console.log(`la bici più leggera è ${bottecchia.nome} e pesa ${bottecchia.peso}`);

 

 //con ciclo for each

 biciCorsa.forEach((element,index) => {
    let {nome,peso} = element;
    if(index == 7){
        console.log(`la bici più leggera è ${nome} e pesa ${peso}`);
    }
 });

 //correzione
 var peso = [];
 let biciLeggera = biciCorsa[0]
 for (let i = 0; i < biciCorsa.length; i++){
     if(biciCorsa[i].peso < biciLeggera.peso)
 }

 //correzione con for each
 biciCorsa.forEach((element) => peso.push(element.peso));
 var leggera = biciCorsa[pes]