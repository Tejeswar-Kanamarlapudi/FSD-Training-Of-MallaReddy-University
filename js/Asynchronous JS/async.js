const user_balance = 700;
const item_price = 600;

// create promise,
// if the user balance is sufficient then resolve
// if the balance is not sufficient then reject

function checkBalance(){
    return new Promise((resolve,reject)=>{
        console.log('checking the task');
        setTimeout(()=>{
            if(user_balance > item_price){
            resolve('Amount Sufficient to buy');
            }else{
                reject('Insufficient balance');
            }
        },3000);
    });
}

async function purchase(){
    try{
        const result = await checkBalance();
        console.log(result)
    } catch(error){
        console.log(error)
    } finally{
        console.log('Executed Successfully');
    }
}

purchase();