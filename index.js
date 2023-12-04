"use strict";
//1 udz
const masyvas1 = [1, 2, 3, 8, 5, 6];

for(let i = 0; i < masyvas1.length; i++){
    console.log(masyvas1[i]);
}

const masyvas2 = [5,2,3]
masyvas2.forEach(element => {
    console.log(element);
});

//2 
let kiek = 0;
for(let i of masyvas2){
    kiek += i
}
console.log(kiek);
//nebaigtas

//3

//4
const skaiciai = [100,10,2,6,5,8,7,3];
const mazSkaic = Math.min(...skaiciai);
console.log(mazSkaic);
const mazSkaicIndex = skaiciai.indexOf(mazSkaic);
console.log(mazSkaicIndex);

const naujiSkaiciai = skaiciai.splice(mazSkaicIndex,3);
console.log(naujiSkaiciai);
console.log(skaiciai);

// 2 skaidre 
//1uzd
const markes = ["audi","BMW","VW", "Toyota", "Nissan"];
const marke = "Bentley";

if(!markes.includes(marke)){
    markes.push(marke);
}

console.log(markes);

//2 uzd
//1var
const prekes = ["Bulves","Bulves","Duona","Batonas","Batonas"];
const prekes2 = [];
for(let i of prekes){
    if (prekes2.indexOf(i) === -1){
        prekes2.push(i);
    }
}
console.log(prekes2);

//3
// teamsuose panasu parase lukas

//4
//a
const skaicMasyvas = [55,78,6,3,8,7];
const skaicMapas = skaicMasyvas.map((el) => el%2 === 0 ? "Lyginis" : el);
console.log(skaicMapas);
//b
const diziosiosRaidesMap = skaicMapas.map((el) => typeof el === "string" ? el.toUpperCase() : el);
console.log(diziosiosRaidesMap);
