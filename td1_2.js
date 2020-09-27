function differentsTypes(){
  
    
    let a, b = 'blabla',  c = "blabla",d = `blabla {$x}`,e = 9,f = 2.5, g = true, h = undefined,i = null,j = [1,2,3], k = new Array(),l = {},m = {"promo":"lpwmce", "nb":25},n = new Date(),o = function() {alert('toto')}, p = 42n;

    console.log(typeof a)
    Number.parseInt(console.log(typeof b))
    console.log(typeof c)
    console.log(typeof d)
    Math.floor(console.log(typeof e))
    console.log(typeof f)
    console.log(typeof g)
    console.log(typeof h)
    console.log(typeof i)
    console.log(typeof j)
    console.log(typeof k)
    console.log(typeof l)
    console.log(typeof m)
    console.log(typeof n)
    console.log(typeof o)
    console.log(typeof p)
    // Uncaught SyntaxError: Identifier 'a' has already been declared
   // var a, b = 'blabla',  c = "blabla",d = `blabla {$x}`,e = 9,f = 2.5, g = true, h = undefined,i = null,j = [1,2,3], k = new Array(),l = {},m = {"promo":"lpwmce", "nb":25},n = new Date(),o = function() {alert('toto')}, p = 42n;

}
differentsTypes();


function conversionsDuType(){
   let nombre = 23
    let chaine = "Hola"
   let string = nombre.toString()
   console.log(string);

   let number = chaine.parseInt()
   console.log(number);
}
differentsTypes();



function testEgualite(){
    let b = false;
    let n = 0;
    let s = '0';
    let tab = [];
    let o = {};
    console.log( b == n);
    console.log(b === n);
    console.log(s == tab);
    console.log(s === tab);
    console.log(tab == o);
    console.log(tab === o);
}
testEgualite();

/*function saisitChaine(){
    let name;
    do {
         name = prompt();
    } while (name != name.toUpperCase() );    
}
saisitChaine();*/

function randomChar(){
    do {
        var cadena = 0;
        var chaine_genere = String.fromCharCode( 65 + Math.random()*(123-65)) 
        console.log();
       var chaine_minuscule = chaine_genere.toLowerCase();
       console.log(chaine_genere);
    } while (chaine_genere === chaine_minuscule && cadena < 5);
}
randomChar(); 



function vocalAleatoria(){
    vocals = ['a','e','i','o','u'];
    for (let i = 0; i < vocals.length; i++) {
       
        console.log(vocals[Math.floor(Math.random() * vocals.length)]); 
    }
    
}
vocalAleatoria();  

/*
function nometprenom(){
    let nom;
    nom = prompt("Bonjour enter your nom");
    let prenom = prompt("Puis enter your prenom");
    let prenombon = prenom.charAt(0).toUpperCase() + prenom.slice(1);
    let nombon = nom.toUpperCase();
    console.log(nombon + " " +prenombon);
}
nometprenom();
*/




//A=>4, E=>3, G=>6, I=>1, O=>0, S=>5, Z=>2


function encrypt(){
    var str = "AEGIOSZHOLAMUNDOaegiosz";
console.log(str);
var encrypted = {
   A:"4",
   E:"3",
   G:"6",
   I:"1",
   O:"0",
   S:"5",
   Z:"2",
   a:"4",
   e:"3",
   g:"6",
   i:"1",
   o:"0",
   s:"5",
   z:"2"
   
};
str = str.replace(/A|4|E|3|G|6|I|1|O|0|S|5|Z|2|a|4|e|3|g|6|i|1|o|0|s|5|z|2/gi, function(matched){
  return encrypted[matched];
});
console.log(str);
}
encrypt();



/*
function enterNumber(){
    let number;
    number = prompt("Enter a number");
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0 ) {
            console.log("Jazz Bundle");
        }else{
            if (i % 3 === 0 ) {
                console.log("Jazz");  
               }
               else if(i % 5 === 0){
               console.log("Bundle");
               }

        }
    }
}
enterNumber();
*/





function additioneEntiers(){
    let tableau1 = [1,2,3,4,10];
    let sumOfValues = 0;
    for (let i = 0; i < tableau1.length; i++) {
        sumOfValues += tableau1[i];
    }
    console.log(sumOfValues);
}

additioneEntiers();

function compteNombreEntiers(){
    let tableauWithPairs = [2,4,6,5,3,31,57];
    let countOfPairs = 0;
    for (let i = 1; i <= tableauWithPairs.length; i++) {
        if (i % 2 === 0) {
            countOfPairs++;
        }
        
    }
    console.log(countOfPairs);
}
compteNombreEntiers();


    
    var array1 = [3,5,7,30,55,10];  
    console.log(array1);
    function sorter(array){
        var swap, done = false, swapped;
        do {
            swapped = 0;
            for (i = 1; i < array.length;i++) {
                if (array[i -1] > array[i]) {
                    swap = array[i];
                    array[i] = array[i - 1];
                    array[i - 1] = swap;
                    swapped = 1;
                }
                if (swapped == 0) {
                    done = true;
                }
            } 
        } while (!done);
           
        return array;
        }
       
console.log(sorter(array1));


function rechercheDichotomique(){
    let tableautries = [1,3,5,7,9];
}


function largestEven(entiers){
    entiers.sort((x, y) => y - x);
    for (let i = 0; i < entiers.length; i++) {
        if (entiers[i] % 2 === 0) {
        return entiers[i];
        }   
    }
}
console.log(largestEven([2,567,100,20,10,34]));
