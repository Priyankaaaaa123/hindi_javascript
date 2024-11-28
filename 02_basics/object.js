const JsUser ={
    name:"Priyanka",
    "Full Name":"priyanka panwar",
    age:23,
    location:"Mumbai",
    email:"priyanka@capgemini.com"
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full Name"]);
//Object.freeze(JsUser);

JsUser.greetings=function(){
    console.log("hello Js User");
}
JsUser.greetingsTwo=function(){
    console.log(`hello JS user,${this["Full Name"]}`)
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());