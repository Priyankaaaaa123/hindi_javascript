 let myfunction=function(){
     console.log("call myfunction")
 }
 let yourfunction=function(){
    console.log("call yourfunction")
 }
 myfunction()
 yourfunction()

/////////////CALLBACK///////////////////

function mydisplayer(){
   console.log(sum);
 }
 function mycalculator(num1,num2){
     let sum =num1+num2;
     return sum
}
 console.log(mycalculator(4,5))

