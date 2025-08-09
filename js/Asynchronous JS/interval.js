// let count = 1;
// let timer = setInterval(()=>{
//     console.log(`Count: ${count}`);
//     count= count + 1
//     if(count>6){
//         clearInterval(timer);
//         console.log("Timer Stopped");
//     }
// },2000);

let clock = setInterval(()=>{
    let time = new Date();
    console.log(time.toLocaleTimeString());
},1000);
setTimeout(()=>{
    clearInterval(clock);
    console.log('Time Stopped')
},9000);