// Syntax
// setTimeout(function,delay_in_ms,args(optional))
// 1000 = 1second
// console.log('1. Starting Script');
// setTimeout(()=>{
//     console.log('2. Hello World');
// },3000);
// setTimeout(()=>{
//     console.log('4. Html')
// },2000)
// setTimeout(()=> console.log('5. js'),4000);
// console.log('3.Ending Script');


//setTimeout with arguments
function wish(name){
    console.log(`Hello ${name}`);
}
// wish('ravindar');
setTimeout(wish,3000,'kesav');