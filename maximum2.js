let inp =  [10, 5, 8,15,20];
let max =inp[0];
let max2 = [0];
for(let i = 0; i < inp.length; i++){
    if(inp[i] > max){
        max2 = max;
        max = inp[i];

    }
   else if(inp[i] > max2 && inp[i] !== max) {
    max2 = inp[i];
   }

}
console.log("Largest:", max);
console.log("Second Largest:", max2);
