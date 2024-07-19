//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */

(function(a,b){
    let toplam = a+b
    console.log(toplam);
})(7,81);

//* Örnek1-gönderilen birinci değer taban, ikinci üs olacak şekilde,  üs bülma işlemi yapalım

(function(c,d){
    let us = c**d
    console.log(us);
})(5,2)