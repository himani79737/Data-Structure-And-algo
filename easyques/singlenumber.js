let arr =  [4,1,2,1,2, 4, 9]; 

var singlenumber = function(arr){
    let  number = 0; 
    for(let i of arr){

        number ^= i;
    }
    return number;
}
console.log(singlenumber(arr));

