/* ---------------------------------- */
/*      FONKSİYONLAR - RECURSIVE      */
/* ---------------------------------- */

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

const topl = (n) => {
  let topl = 0;
  for (let i = 1; i <= n; i++) {
    topl = topl + i;
  }
  return topl;
};

console.log(topl(8));

// recursive ile:
const toplam1 = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplam1(n - 1) + n;
  }
};
console.log(toplam1(9));

const fact = (n)=>{
    if(n===1){
        return n
    }else{
        return n * fact(n-1)
    }
}
console.log(fact(5));

//girilen n.terimdeki fibonacci sayısını yazdıran fonksiyon

const fib = (n) =>{
    if (n===0){
        return n
    }else if (n<=2){
        return n
    } else {
        return fib(n-1) + fib(n-2)
    }
}
console.log(fib(6));