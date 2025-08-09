async function register() {
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("User Registered");
                resolve()
            }, 1000);
    })
}

async function login() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            console.log("User Logged In");
            resolve()
        }, 1000);
    })
}

async function fetchData() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Fetched User Data");
    }, 1000);
    })
}

async function displayData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User Data Displayed");
        }, 1000);
    })
}



async function user()
{
    await register();

    await login();

    await fetchData();

    await  displayData()
}


user();