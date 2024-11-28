const map=new Map()
map.set("h","hey")
map.set("e","ello")
map.set("l","lo")
map.set("l")
map.set("o","hello")

//console.log(map)
for(const key of map){
    console.log(key)
}

const myobj={
    "game1":"gta",
    "game2":"subwaysufer",
    "game3":"Ludo"
}
// for of loop does not work for the objects it only works for map and array

for(const key in myobj){
    console.log(`${key} for objects ${myobj[key]}`)
}

let array1=["java","c++","python"]
for(const key in array1){
    console.log(array1[key])
}