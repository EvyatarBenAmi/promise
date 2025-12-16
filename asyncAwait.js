function waitForHello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Hello`)
        }, 500);
    })
}
// console.log(await waitForHello());

function doubleAsync(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n * 2)
        }, 600);
    })
}
async function run() {
    console.log(`Result is: ${await doubleAsync(5)}`)
}
// run()

function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Dana" })
        }, 1000);
    })
}
async function printUser() {
    const user = await fetchUser()
    console.log(`User name: ${user.name}`);
}
// printUser()

function validateAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {

            resolve()
        } else {

            reject(`Too young`)
        }
    })
}
// const a = await validateAge(17)

function getNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        }, 400);
    })
}
function square(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n * n)
        }, 400);
    })
}
async function result() {
    console.log(await square(await getNumber()));
}
// result()