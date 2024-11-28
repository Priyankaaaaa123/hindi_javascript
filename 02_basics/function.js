function addTwoNumbers(number1, number2){
    let result=number1+number2
    return result
}

const result = addTwoNumbers(3,5)
console.log("Result",result);

function userloggedIn(username){
    if(!username){
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(userloggedIn("Priyanka"))