/*
La seguente funzione controlla che le due stringhe siano due permutazioni
Parametro -> firstString = la prima delle due stringe da confrontare
Parametro -> secondString = la seconda delle due stringhe da confrontare
Return -> true se le stringhe sono una la permutazione dell'altra
*/
function isPermutation(firstString, secondString) {
    if(firstString.length != secondString.length)
        return false;
    let a = objectify(firstString);
    let b = objectify(secondString);
    for (key in a) {
        if (b[key] == undefined || a[key] != b[key])
            return false;
    }
    return true;
}

/*
La seguente funzione trasforma una stringa in un oggetto avente come chiavi i caratteri che la compongono e come valori il numero di occorrenze del carattere 
Parametro -> s = stringa da trasformare in oggetto
Return -> un oggetto avente strutturra: {carattere:occorrenze...}
*/
function objectify(s) {
    let res = {}
    for (c of s) {
        if (res[c] != undefined)
            res[c]++;
        else
            res[c] = 1;
    }
    return res
}

/*
La seguente funzione genera un array contente tutte le possibili permutazioni di una stringa
Parametro -> s = stringa di cui generarare tutte le permutaziooni
Return -> un array contente ogni permutazione di s (incluso s stesso)
*/
function findPermutations(s) {
    if (s.length < 2) {
        return s;
    }

    let permutationsArray = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (s.indexOf(char) != i)
            continue;

        let remainingChars = s.slice(0, i) + s.slice(i + 1, s.length);

        for (let permutation of findPermutations(remainingChars)) {
            permutationsArray.push(char + permutation);
        }
    }
    return permutationsArray;
}

function isVampire(n){
    let nString = String(n)
    let half = nString.length/2;
    if(nString.length%2!=0)
        return false;
    let permutations = findPermutations(nString);
    for(permutation of permutations){
        let a = Number(permutation.substring(0, half))
        let b = Number(permutation.substring(half))
        //console.log(`Permutation ${permutation} | a: ${a} b: ${b}`)
        if(a*b == n && (a%10 != 0 || b%10 != 0))
            return true
    }
    return false;
}

let a = "sbrinz";
let b = "bsinrz";
for(let i = 0; i<1000000; i++){
    if(isVampire(i))
        console.log(`${i} is Vampire`)
}
//console.log(isVampire(1260))
console.log(findPermutations(a));
console.log(isPermutation(a, b));