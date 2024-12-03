const mynums=[1,2,3,4,5,6,7]

// const newnums = mynums.filter((num) => (num>4))
// console.log(newnums)
const newnums=mynums
               .map((num)=>num*10)
               .map((num)=>num+1)
               .filter((num)=>num>4)
console.log(newnums);               