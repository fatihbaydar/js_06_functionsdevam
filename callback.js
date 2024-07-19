//? ====================================================
// ?              FONKSİYONLAR - CALLBACK
// ? ====================================================

// Normal fonksiyon tanımı
// a : argument
function deneme(a){
    console.log(a)
}

// 67 değeri parametre
deneme(67)

//*** Callback function */
// JavaScript'te callback fonksiyonları, bir fonksiyonun başka bir fonksiyona argüman olarak geçirilip, bu fonksiyonun daha sonra çağrılması prensibine dayanır.

function ilkFonksiyon(a){
    console.log("merhaba");
    a()
}

function ikinciFonksiyon(){
    console.log("nasılsın");
}

ilkFonksiyon(ikinciFonksiyon)

// sonuca islem diye bir şey atıyorum ama buu işlemin ne olduğu belli değil.bunun içinde sayı1 ile sayı2 var.aşağıda topla ve cıkar isimli fonksiyonlarım var.aşağıda çağırırken matematik() içerisine sayıları yazıyoruz sonra da tanımladığımız işlemlerden hangisini atayacaksak onu gönderiyoruz.yani yukarda isle diye yazdığımız yere aşağıdaki fonksiyonlardan hangisini atamışsak o geliyor.
function matematik(sayı1,sayı2,islem){
    const sonuc = islem(sayı1,sayı2)
    console.log(sonuc);
}

function topla(a,b){
    return a+b
}

function cıkar(a,b){
    return a-b
}

matematik(70,45,topla)
matematik(70,45,cıkar)

//hipotenüs bulma
function hip(kenar1,kenar2,kenar3){
    const sonuc =Math.sqrt(kenar3(kenar1,kenar2))
    console.log(sonuc);
}

function kare(a,b){
    return (a**2 +b**2)
}

hip(3,4,kare)

