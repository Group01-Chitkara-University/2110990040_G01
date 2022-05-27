// function isPositive(n){
    // return(n>0);

// }
//  let isPositive = (n) => n >=0;
//  let isPositive = n =>{
    //  return n >=0;
//  }
// let sum = (a,b) => a+b;
// alert(sum(3,2))
// console.log(sum(3,2))


 let ask = prompt("enter")
 const fixed_rent = 100

let billTot = (calls ) => {
    let Totcall;
    let bill;
    if (calls > 100) {
        Totcall = calls - 100;
        calls = calls - Totcall;
        bill = 2*Totcall + 1*call + fixed_rent;
    }
    else {
        bill = 1*calls + fixed_rent;
        
        return bill;
    }
     let resBill = billTot(ask);
     document.write(resBill);







