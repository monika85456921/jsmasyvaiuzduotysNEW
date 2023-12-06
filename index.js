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
// console.log(duomenysTop);
// duomenysTop.forEach((el) => console.log(`id: ${el.id}, type: ${el.type}`));

// const duom = duomenys.topping.forEach((el) => {Object.entries(duomenys).forEach(([key, value]) => console.log(key, value))})

// duomenys.topping.forEach(item => {
//     Object.keys(item).forEach(key => {
//         console.log(`${key}: ${item[key]}`)
//     })
// })

////////////////////////////////5

const family = {
    grandparents: {
        grandma: "Marge",
        grandpa: "Homer",
    },
    parents: {
        mom: "Lisa",
        dad:"Millhouse",
    },
    children: {
        daughter: "Anne",
        son1: "Peter",
        son2: "Bob",
    },
};

// for(let i in family){
    // console.log(i)
    // for(let a in family[i]){
        // console.log(a);
        // console.log(family[i]);
        // console.log(`${i}: ${family[i][a]}`)
        // let members = Object.values(family[i].join(", "));
        // console.log(`${i}: ${members}`)
//     }
// }
for(let i in family){
    let members = Object.values(family[i])
    console.log(`${i}: ${members}`);
}
//knygos
let knygos = [
    {
      isbn: 9786098233346,
      price: 7.99,
      year: 2006,
      title: "Bloga dukte",
      pagecount: 250,
    },
    {
      isbn: 9786098233391,
      price: 7.99,
      year: 2015,
      title: "Mergina kuria jis pazinojo",
      pagecount: 315,
    },
    {
      isbn: 9786099609324,
      price: 7.99,
      year: 2019,
      title: "Tapk ragana",
      pagecount: 150,
    },
    {
      isbn: 9786094792250,
      price: 6.99,
      year: 2007,
      title: "Sfera",
      pagecount: 450,
    },
    {
      isbn: 9786094792335,
      price: 9.99,
      year: 2019,
      title: "Mes susitinkame cia",
      pagecount: 500,
    },
    {
      isbn: 9786094273780,
      price: 7.99,
      year: 2019,
      title: "Sunaikinimas",
      pagecount: 509,
    },
    {
      isbn: 9786098233483,
      price: 12.99,
      year: 2018,
      title: "Artemide",
      pagecount: 199,
    },
    {
      isbn: 9786094273872,
      price: 4.99,
      year: 2015,
      title: "Fondas ir imperija",
      pagecount: 185,
    },
    {
      isbn: 9786094273902,
      price: 7.99,
      year: 2019,
      title: "Amzinybes fjordo pranasai",
      pagecount: 333,
    },
    {
      isbn: 9786094442742,
      price: 5.99,
      year: 2004,
      title: "Bejegiai",
      pagecount: 777,
    },
    {
      isbn: 9786094442940,
      price: 14.99,
      year: 2019,
      title: "Klajunai",
      pagecount: 172,
    },
    {
      isbn: 9786090404386,
      price: 7.99,
      year: 2015,
      title: "Mergina, kuri pakliuvo i voratinkli",
      pagecount: 356,
    },
  ];
let knygosPo = [];

for(let i in knygos){
      for(let a in knygos[i]){ 
          console.log(`${a} ${knygos[i][a]}`);
      }
      if(knygos[i].year > 2015){
        knygosPo.push(knygos[i].title)
    }
    }
console.log(knygosPo);

//6 prat
//1
let  saskaitos = [45,150,225];
let arbata2 = [];
let total2 = [];
function arbatpinigiai(saskaita){ 
   saskaitos.forEach((num) => {
       let arbata = 0;
       let total = 0;
       if(num <50){
           arbata = num*0.2;
           total = arbata + num;
           arbata2.push(arbata);
           total2.push(total);
       }else if(50<=num && num<200){
           arbata = num*0.15;
           total = arbata+num;
           arbata2.push(arbata);
           total2.push(total);
       }else{
           arbata = num*0.1;
           total = arbata + num;
           arbata2.push(arbata);
           total2.push(total);
       }
   });
}
arbatpinigiai(saskaitos)
console.log(arbata2);
console.log(total2);

////////7 prat

const questions1 = [
    {
      id: 1,
      question: "Kuri HTML versija yra naudojama šiuo metu?",
      answers: [
        { text: 2, isCorrect: false },
        { text: 5, isCorrect: true },
        { text: 7, isCorrect: false },
        { text: 3, isCorrect: false },
        { text: 8.3, isCorrect: false },
      ],
    },
    {
      id: 2,
      question:
        "Kokį HTML semantinį elementą parinktumėte tinklapio naujienai aprašyti?",
      answers: [
        { text: "<news>", isCorrect: false },
        { text: "<article>", isCorrect: true },
        { text: "<section>", isCorrect: false },
        { text: "<main>", isCorrect: false },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Kokią display reikšmę turi HTML a elementas pagal nutylėjimą?",
      answers: [
        { text: "inline", isCorrect: true },
        { text: "block", isCorrect: false },
        { text: "inline-block", isCorrect: false },
        { text: "table", isCorrect: false },
      ],
    },
    {
      id: 4,
      question:
        "Kuris selektorius yra teisingas norint stilių taikyti tik pdf failams?",
      answers: [
        { text: "a[href >='.pdf']", isCorrect: false },
        { text: "a[href $='.pdf']", isCorrect: false },
        { text: "a[href only ='.pdf']", isCorrect: false },
        { text: "a[href='.pdf']", isCorrect: true },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 5,
      question:
        "Kokią klasę reikia priskirti HTML blokui, kad jis Bootstrap grid'e užimtų 5 stulpelius praleidžiant vieną stulpelį?",
      answers: [
        { text: ".columns-5-offset-1", isCorrect: false },
        { text: ".col-sm5-1", isCorrect: false },
        { text: ".col-sm-5 .col-offset-1", isCorrect: false },
        { text: ".col-sm-5 .col-sm-offset-1", isCorrect: true }, // ar tikrai?
      ],
    },
    {
      id: 6,
      question:
        "Kaip kintamajam antraste, kuriam priskirtas HTML elementas header pakeisti fono spalvą naudojant JavaScript?",
      answers: [
        { text: "antraste.style.background-color = 'tomato';", isCorrect: false },
        { text: "antraste.style.backgroundColor = 'tomato';", isCorrect: true },
        { text: "antraste.css.background-color= 'tomato';", isCorrect: false },
        { text: "Teisingo atsakymo nėra", isCorrect: false },
      ],
    },
    {
      id: 7,
      question: "Kaip importuoti išorinį scss failą į pagrindinį scss failą?",
      answers: [
        { text: "@include isorinis_failas", isCorrect: false },
        { text: "@add isorinis_failas", isCorrect: false },
        { text: "@import isorinis_failas", isCorrect: true },
        { text: "Nėra teisingo varianto", isCorrect: false },
      ],
    },
    {
      id: 8,
      question:
        "Kaip padaryt nuorodą į tėvinį html elementą a su tikslu aprašyti pseudo klasės :hover formatavimą?",
      answers: [
        { text: "extend a:hover", isCorrect: false },
        { text: "into a:hover", isCorrect: false },
        { text: "&:hover", isCorrect: true },
        { text: "@:hover", isCorrect: false },
      ],
    },
    {
      id: 9,
      question: "Kuris iš sąrašo nėra preprocesorius?",
      answers: [
        { text: "Ruby", isCorrect: true },
        { text: "SASS", isCorrect: false },
        { text: "LESS", isCorrect: false },
        { text: "Stylus", isCorrect: false },
        { text: "Nėra teisingo varianto", isCorrect: false },
      ],
    },
    {
      id: 10,
      question:
        "Kaip pasirinkti header elementą ir jį paslėpti naudojant jQuery?",
      answers: [
        { text: "$('header').diplayNone();", isCorrect: false }, //nezinau
        { text: "$('header').hide();", isCorrect: true },
        { text: "$('header').hideIt();", isCorrect: false },
        { text: "Nėra teisingo atsakymo.", isCorrect: false },
      ],
    },
    {
      id: 11,
      question: "Kokią template sistemą naudoja Drupal 8?",
      answers: [
        { text: "HTML", isCorrect: false },
        { text: "Smarty", isCorrect: false },
        { text: "Twig", isCorrect: true },
        { text: "PHP", isCorrect: false },
        { text: "Nėra teisingo varianto", isCorrect: false },
      ],
    },
    {
      id: 12,
      question: "Kuo skiriasi kintamieji let nuo var ?",
      answers: [
        { text: "Nesiskiria", isCorrect: false },
        {
          text: "Var yra globalus kintamasis naudojamas visoje funkcijoje, o let yra vietinis kintamasis, naudojamas blokuose",
          isCorrect: true,
        },
        {
          text: "Var kintamasis yra skirtas tik tekstiniams kintamiesiams aprašyti, o let numerių kintamiesiems",
          isCorrect: false,
        },
        {
          text: "Var naudojamas tuomet kai kintamojo ilgis ne didesnis nei 5 simboliai, o let, kuomet daugiau nei 5",
          isCorrect: false,
        },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 13,
      question: "Kam naudojamas 'use strict'?",
      answers: [
        {
          text: "‘Use strict’ naudojimas apsaugo neleisdamas atlikti tam tikrų veiksmų ir suteikia daugiau išimčių",
          isCorrect: false,
        },
        {
          text: "Užkerta kelią klaidoms kai atliekami palyginti “nesaugūs” veiksami",
          isCorrect: false,
        },
        {
          text: "Išjungia painias ir blogai apgalvotas funkcijas",
          isCorrect: false,
        },
        { text: "Visi atsakymai tesisingi", isCorrect: true },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 14,
      question: "Kodėl CSS vadinami pakopiniais stiliais?",
      answers: [
        { text: "Kodas rašomas pakopomis", isCorrect: false },
        {
          text: "Pakopos nusako, kuri taisyklė yra svarbesnė ir bus taikoma elementui",
          isCorrect: true,
        },
        {
          text: "Įjungus CSS pakopas, galima naudoti !important",
          isCorrect: false,
        },
        { text: "Teisingo atsakymo nėra", isCorrect: false },
      ],
    },
    {
      id: 15,
      question: "Koks metodas naudojamas, norint sužinoti masyvo ilgį JS?",
      answers: [
        { text: "count", isCorrect: false },
        { text: "length", isCorrect: true },
        { text: "valueOf", isCorrect: false },
        { text: "Nėra teisingo atsakymo", isCorrect: false },
      ],
    },
    {
      id: 16,
      question: "Kiek laiko duomenys saugomi local storage?",
      answers: [
        { text: "Iki perkraunant puslapį", isCorrect: false },
        { text: "Vieną parą", isCorrect: false },
        { text: "Vieną mėnesį", isCorrect: false },
        { text: "Metus laiko", isCorrect: false },
        { text: "Neturi galiojimo laiko", isCorrect: true },
      ],
    },
    {
      id: 17,
      question:
        "let kiekis = 12; \n" +
        "console.log(++kiekis); \n" +
        "Ką išves konsolėje?",
      answers: [
        { text: "undefined", isCorrect: false },
        { text: "12", isCorrect: false },
        { text: "13", isCorrect: true },
        { text: "Nieko", isCorrect: false },
      ],
    },
    {
      id: 18,
      question: "Koks metodas naudojamas eilutės duomenis konvertuoti į masyvą?",
      answers: [
        { text: "shift()", isCorrect: false },
        { text: "pop()", isCorrect: false },
        { text: "splice()", isCorrect: false },
        { text: "split()", isCorrect: true },
      ],
    },
    {
      id: 19,
      question:
        "function sveikas(){ \n" +
        ' let vardas="Jonas" \n' +
        "console.log(vardas)\n" +
        "} \n" +
        "sveikas();\n" +
        "Ką atspausdins konsolėje?",
      answers: [
        { text: "Jonas", isCorrect: true },
        { text: "vardas", isCorrect: false },
        { text: "sveikas", isCorrect: false },
        { text: "undefined", isCorrect: false },
        { text: "nieko", isCorrect: false },
      ],
    },
    {
      id: 20,
      question: "Kaip apibrėžiamas SASS kintamasis vardu spalva?",
      answers: [
        { text: "const sass spalva;", isCorrect: false },
        { text: "const spalva;", isCorrect: false },
        { text: "let spalva;", isCorrect: false },
        { text: "$spalva string", isCorrect: false },
        { text: "$spalva", isCorrect: true },
      ],
    },
  ];
  for(let question of questions1){
    const teisingasAts = question.answers.find(answer => answer.isCorrect);
    console.log(`Klausimas: ${question.id}. ${question.question}\nAtsakymas: ${teisingasAts.text}`);
    // console.log(`Klausimas: ${question.id}. ${question.question}`);
    // console.log(`Atsakymas: ${teisingasAts.text}`);
  }
