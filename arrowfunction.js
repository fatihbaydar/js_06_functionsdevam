// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

// function decleration:
function selamla(){
    console.log("selam");
}

//function expression
const selamla1 = function(){
    console.log("selam");
}

// arrow function
//tek satırsa {} gerekmez ancak return kullanılacaksa veya tek satır değilse {} kullanılır
const selamla2 =()=> {
    console.log("merhaba");
}

console.clear();


// parametre alan -return ve {}
// 3 ün katı mı kontrol edilecek


// const kat =(a)=>{
//     sonuc = a%3 === 0 ? "3'ün katı" : "değil"
//     return sonuc
// }
// console.log(kat(44));

const kat =(a)=> a % 3=== 0 ? "3'ün katı" : "değil"
console.log(kat(6));

// ternary tek satır kabul edildiği için return ve {} kullanılmasa da olur

//ör: iki sayı toplamı

const toplam = (a,b)=>  a+b
const eksi = (a,b)=>  a-b
const çarp = (a,b)=>  a*b
const böl = (a,b)=>  a/b

console.log(çarp(9,8));

//ör silindir hacmi r yi parametre alacak

const pi = Math.PI
const hacim = (r,h)=> h*pi*r*r
console.log(hacim(4,5));

// iki sayıdan büyük olanı bulma

const buyuk = (a,b)=> a>b ? "a buyuk" : "b buyuk"
console.log(buyuk(67,8));

const buyukBul = (a, b) => (a > b ? `büyük sayı :${a}` : `büyük sayı :${b}`);
console.log(buyukBul(1, 2));

//asal sayı bulma

const asal = (num) => {
    if (num <= 1) return "Sayı asal değil";
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return "Sayı asal değil";
    }
    return "Sayı asal";
};
console.log(asal(14))

const asal1 = (num) => {
    if (num < 2){
        console.log("bu sayıya kadar olan asal sayı yok");
        return;
    }
    
    for (let i = 2; i <= num; i++){
        if (i === 2){
            console.log(i)
        }else {
            let entry = true;
            for (let j = 2; j < i; j++){
                if (i % j === 0){
                    entry = false;
                    break;
                }
            }
            entry ? console.log(i) : "";
        }
    }
}
asal1(29);