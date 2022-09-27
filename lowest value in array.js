var array = [20,40,30,1,45,33,5]

//find highest value in array
let min = array[0]
for(const p of array){
    min = Math.max(min, p)
}
alert(min)
//find lowest value in array 
for(const z of array){
    min = Math.min(min, z)
}
alert(min)