
function getHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        }, 500);
    })
}
// const p = getHello()
// p.then((val)=>console.log(val))

function addAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    })
}
// addAsync(5, 7).then((val) => { console.log(val) })

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n % 2 == 0) {
                resolve("Even")
            }
            reject("Odd number not allowed")
        }, 800);
    })
}
// checkNumber(4).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})
// checkNumber(5).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === `admin` && password === `1234`) {
                resolve(`Login successful`)
            }
            reject(`Invalid credentials`)
        }, 1200);
    })
}
// login(`admin`,`1234`).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})
// login(`adm`,`1234`).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

function getNumbers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5])
        }, 700);
    })
}
// getNumbers().then((val) => {
//     val.forEach(element => {
//         console.log(element);
//     });
// })

function unstableOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5){
                resolve(`Success`)
            }
            reject(`Random failure`)
        }, 1000);
    })
}
// unstableOperation().then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Dana", age: 16 })
        }, 600);
    })
}
// getUser().then((val)=>{console.log(`User: ${val.name}, ${val.age}`)})

function squarePositive(n){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n >= 0){
                resolve(n*n)
            }
            reject(`Negative number not allowed`)
        }, 500);
    })
}
// squarePositive(3).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})
// squarePositive(-1).then((val)=>{console.log(val)}).catch((err)=>{console.log(err)})