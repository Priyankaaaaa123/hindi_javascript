const tinderUser={}

 tinderUser.id="123abc"
 tinderUser.name="Sammy"

//console.log(tinderUser);
const regularUser={
    email:"some@google.com",
    fullname:{
        userfullname:{
            firstname:"priyanka",
            lastname:"panwar"
        }
    }
}
//console.log(regularUser);
const obj1={1: "a", 2: "b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj1,obj2)
console.log(obj3);