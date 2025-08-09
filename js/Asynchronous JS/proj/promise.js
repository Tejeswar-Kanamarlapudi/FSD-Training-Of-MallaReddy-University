function register() {
    return new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("User Registered");
                resolve()
            }, 1000);
    })
}

function login() {
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            console.log("User Logged In");
            resolve()
        }, 1000);
    })
}

function fetchData() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Fetched User Data");
    }, 1000);
    })
}

function displayData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("User Data Displayed");
        }, 1000);
    })
}

register()
.then(()=>{
    return login();
})
.then(()=>{
    return fetchData();
})
.then(()=>{
    displayData()
})
.catch((err)=>{
    console.log(err);
})