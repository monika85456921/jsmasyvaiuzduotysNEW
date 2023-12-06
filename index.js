"use strict";
//1 udz
const masyvas1 = [1, 6, 3, 8, 5, 6];
// 1budas su for ciklu
for(let i = 0; i < masyvas1.length; i++){
    console.log(masyvas1[i]);
}
//2 budas su array metodu
const masyvas2 = [5,2,3]
masyvas2.forEach(element => {
    console.log(element);
});

//2 
//1.skaiciu sumavimas su for ciklu
const masyvas3 = [5,2,3,6]
let kiek = 0;
for(let i of masyvas3){
    kiek += i
}
console.log(kiek);
//2.su reduce
const result = masyvas3.reduce((a,b) =>{
    return a + b;
},0);
console.log(result);
//3. su forEach
let suma = 0;
masyvas3.forEach(el =>{
    suma += el;
});
console.log(suma);

//3

let sakinys = "I got a jar of dirt and guess what's inside it";
let sakinioMasyvas = sakinys.split(" ");

const lyginiaiZodziai = sakinioMasyvas.filter((word,index) => index % 2 !== 0 );
const neLyginiaiZodziai = sakinioMasyvas.filter((word,index) => index % 2 === 0);

const lyginiuZodziuSakinys = lyginiaiZodziai.join(" ");
const neLyginiuZodziuSakinys = neLyginiaiZodziai.join(" ");

console.log(sakinioMasyvas);
console.log(lyginiaiZodziai);
console.log(neLyginiaiZodziai);
console.log(lyginiuZodziuSakinys);
console.log(neLyginiuZodziuSakinys);


//4
const skaiciai = [100,10,30,2,6,5,8,7,3];
const mazSkaic = Math.min(...skaiciai);
console.log(mazSkaic);
const mazSkaicIndex = skaiciai.indexOf(mazSkaic);
console.log(mazSkaicIndex);

const naujiSkaiciai = skaiciai.splice(mazSkaicIndex,3);
console.log(naujiSkaiciai);
console.log(skaiciai);

// // 2 skaidre 
// //1uzd
const markes = ["audi","BMW","VW", "Toyota", "Nissan"];
const marke = "Bentley";

if(!markes.includes(marke)){
    markes.push(marke);
}

console.log(markes);

// //2 uzd
//1var
const prekes = ["Bulves","Bulves","Duona","Batonas","Batonas"];
const prekes2 = [];
for(let i of prekes){
    if (prekes2.indexOf(i) === -1){
        prekes2.push(i);
    }
}
console.log(prekes2);
//2var
const groceries = ["Bulves", "Bulves", "Duona", "Batonas", "Batonas"];
const uniqueGroceries = groceries.filter((item, index, array) => {
  return array.indexOf(item) === index;
});

console.log("unique : ");
uniqueGroceries.forEach((item) => {
  console.log(item);
});
// //3
// // teamsuose panasu parase lukas
const vaisiai = ['obuolys', 'kivis', 'obuolys', 'kivis', 'ananasas', 'mangas', 'kriause'];
const vieniVaisiai = [];
vaisiai.forEach((el)=>{
    if(!vieniVaisiai.includes(el)){
        vieniVaisiai.push(el);
    }
});
console.log(vieniVaisiai);
// //4
// //a
const skaicMasyvas = [55,78,6,3,8,7];
const skaicMapas = skaicMasyvas.map((el) => el%2 === 0 ? "Lyginis" : el);
console.log(skaicMapas);
//b
const diziosiosRaidesMap = skaicMapas.map((el) => typeof el === "string" ? el.toUpperCase() : el);
console.log(diziosiosRaidesMap);

//3skaidre
//1uzd
function randomSkaicius(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomMasyvas = Array.from({ length: 30 }, () => randomSkaicius(5, 25));
console.log(randomMasyvas);
//2uzd
//a su filter
const didesniUzDes = randomMasyvas.filter(randomMasyvas => randomMasyvas > 10);
console.log(didesniUzDes);
const kiekYra = didesniUzDes.length;
console.log(kiekYra);

//b
const didziausias = Math.max(...randomMasyvas);
const didziausioIndex = randomMasyvas.reduce((acc, number, index)=>{
    if (number === didziausias){
        acc.push(index);
    }
    return acc;
},[]);
console.log(didziausias);
console.log(didziausioIndex.join(', '));
console.log(`didziausias skaicius masyve yra : ${didziausias}, jo index'ai yra: ${didziausioIndex.join(', ')}`);
// su forEach
//susikurti nauja tuscia masyva i kuri viska desim
const naujasDidIndex = [];
const didIndex = randomMasyvas.forEach((el,index)=> el === didziausias ? naujasDidIndex.push(index) : null);
console.log("didziausu skaicio indexai yra:", naujasDidIndex);

//c
//1var
let sumaMasyvo = 0;
for (let i = 0; i < randomMasyvas.length; i += 2) {
    sumaMasyvo += randomMasyvas[i];
}
console.log(`suma yra: ${sumaMasyvo}`);
//2var
const sum =randomMasyvas.reduce((acc,num,index) => (index % 2 === 0) ? acc + num: acc, null);
console.log(`suma yra: ${sum}`);

//d
//1var
const naujasMasyvas = randomMasyvas.map((num,index) => num - index);
console.log(naujasMasyvas);
//2var su forEach
const atimtiIndex = [];
const atimtiindexai = randomMasyvas.forEach((el, index) => atimtiIndex.push(el - index));
console.log(atimtiIndex);
//e 
//sita funkcija jau aprasyta virsuj
// function prideti(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// for(let i = 0; i < 10; i++){
//     randomMasyvas.push(randomSkaicius(5,25));
// }
// console.log(randomMasyvas);

//nebaigtas
// for(let i = 0; i<10;i++){
//     let ketSkaic = randomMasyvas.push(randomSkaicius(5,25));
//     const ketv = Math.floor(Math.random() * (25 - 5))
//     console.log(ketSkaic);
// }
// console.log(randomMasyvas);


//f
const proriniaiIndex = randomMasyvas.filter((num,index) => index % 2 !== 0 );
const nePoriniaiIndex = randomMasyvas.filter((num,index) => index % 2 === 0);
console.log(proriniaiIndex);
console.log(nePoriniaiIndex);

//g

const pirminisSuPoriniais = randomMasyvas.map((number,index) => (number > 15 && index % 2 === 0) ? 0 : number);
console.log(randomMasyvas);
console.log(pirminisSuPoriniais);

//h 
const didUzDesIndex = (el) => el > 10;
console.log(randomMasyvas.findIndex(didUzDesIndex));

/////////////////////////////4 skaidre

let duomenys = {
    id: "0001",
    type: "donut",
    name: "cake",
    ppu: 0.55,
    topping: [
        { id: "5001", type: "None" },
        { id: "5002", type: "Glazed" },
        { id: "5005", type: "Sugar" },
        { id: "5007", type: "Powdered Sugar" },
        { id: "5006", type: "Chocolate with Sprinkles" },
        { id: "5003", type: "Chocolate" },
        { id: "5004", type: "Maple" },
    ]
};
const duomenysTop = duomenys.topping;
console.log(duomenysTop);
// duomenysTop.forEach((el) => console.log(`id: ${el.id}, type: ${el.type}`));
// duomenysTop.forEach((el) => (object.entries(duomenys).forEach([KeyboardEvent, value]) =>
//     console.log(key, value));

const masyvas2 = duomenys.topping.forEach((el) => {Object.entries(duomenys).forEach(([key, value]) => console.log(key, value))})

