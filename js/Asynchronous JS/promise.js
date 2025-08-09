// Syntax
// new Promise((resolve,reject) => {
//     if(success){
//         resolve(value);
//     } else{
//         reject(error);
//     }
// });

let order = true;

let myPromise = new Promise((resolve,reject)=>{
    console.log('checking the task');
    setTimeout(()=>{
        if(order){
        resolve('Task completed successfully');
        }else{
            reject('Sorry, Task Failed');
        }
    },2000);
});

myPromise.then(result =>{
    console.log(result);
}).catch(error => {
    console.log(error);
}).finally(()=>{
    console.log('Executed successfully');
})