function differentsTypes(){
    let a ;
    let b = 'blabla'
    let c = "blabla"
    let d = `blabla {$x}`
    let e = 9
    let f = 2.5
    let g = true
    let h = undefined
    let i = null
    let j = [1,2,3]
    let k = new Array()
    let l = {}
    let m = {"promo":"lpwmce", "nb":25}
    let n = new Date()
    let o = function() {alert('toto')}
    let p = 42n
    
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
}
differentsTypes();
function conversionsDuType(){
    let bb=false;
    let nn=0;
    let ss='0';
    
    console.log(bb === nn);
    console.log(bb === nn);
    console.log(ss == nn);
    console.log(ss ===nn);
}
differentsTypes();



function testEgualite(){
    let b = false;
    let n = 0;
    let s = '0';
    let tab = [];
    let o = {};
    console.log( b == n);
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
       var chaine_minuscule = chaine_genere.toLowerCase();
       console.log(chaine_genere);
    } while (chaine_genere === chaine_minuscule && cadena < 5);
}
randomChar(); 



/*function vocalAleatoria(){
    vocals = ['a','e','i','o','u'];

    vocals.forEach(randomVowel => console.log(Math.random()*vocals.length())); 
}
vocalAleatoria();*/

function nometprenom(){
    let nom;
    nom = prompt("Bonjour enter your nom");
    let prenom = prompt("Puis enter your prenom");
    let prenombon = prenom.charAt(0).toUpperCase() + prenom.slice(1);
    let nombon = nom.toUpperCase();
    console.log(nombon + " " +prenombon);
}
nometprenom();

function chainecrypte(){
    let chaine_cryptee = "AEGIOSZHOLAMUNDO"
    
}








