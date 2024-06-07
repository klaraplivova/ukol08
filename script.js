const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// 1. Vypište do stránky všechna čísla:
const cisla = document.querySelector("#cisla")

numbers.forEach((cislo) => {
  cisla.textContent += `${cislo}, ` 
})

// 2. Vypište do stránky druhé mocniny všech čísel:
const mocniny = document.querySelector("#mocniny")

numbers.forEach((cislo) => {
  mocniny.textContent += `${cislo * cislo}, `
})

// 3. Vypište do stránky pouze záporná čísla:
const zaporna = document.querySelector("#zaporna")

numbers.forEach((cislo) => {
  if (cislo < 0) {
    zaporna.textContent += `${cislo}, ` 
  }
})

// 4. Vypište do stránky absolutní hodnotu všech čísel:
const absolutni = document.querySelector("#absolutni")

numbers.forEach((cislo) => {
  absolutni.textContent += `${Math.abs(cislo)}, `
})

// 5. Vypište do stránky pouze sudá čísla:
const suda = document.querySelector("#suda")

numbers.forEach((cislo) => {
  if (cislo % 2 === 0){
  suda.textContent += `${cislo}, `
  } else {}
})

// 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi:
const delitelna3 = document.querySelector("#delitelna3")

numbers.forEach((cislo) => {
  if (Math.abs(cislo) % 3 === 0){
    delitelna3.textContent += `${cislo}, `
  } else {}
})

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5:
const daleko = document.querySelector("#daleko")

numbers.forEach((cislo) => {
  daleko.textContent += `${Math.abs(5 - cislo)}, `
})

// 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5:
const dalekoMocniny = document.querySelector("#daleko-mocniny")

numbers.forEach((cislo) => {
  dalekoMocniny.textContent += `${Math.pow(Math.abs(5 - cislo), 2)}, `
})

// 9. Spočítejte, kolik je v seznamu záporných čísel:
const pocet = document.querySelector("#pocet")

let a = 0

numbers.forEach((cislo) => {
  if (cislo < 0) {
    a++;
  }
})

pocet.textContent += a

// 10. Spočítejte součet všech čísel v poli:
const soucet = document.querySelector("#soucet")

let b = 0

numbers.forEach((cislo) => {
  b += cislo
})

soucet.textContent += b

// 11. Spočítejte průměr všech čísel v poli:
const prumer = document.querySelector("#prumer")

prumer.textContent += b / numbers.length

// 12. Spočítejte součet všech kladných čísel v poli:
const kladnaSoucet = document.querySelector("#kladna-soucet")

let c = 0 

numbers.forEach((cislo) => {
  if (cislo > 0) {
    c += cislo
  }
})

kladnaSoucet.textContent += c