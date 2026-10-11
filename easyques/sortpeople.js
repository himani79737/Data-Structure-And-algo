let names = ["Himani", "Reema", "Nisha", "Vishal"], heights = [150, 195, 162, 175];

var sortPeople = function (names, heights) {
    let map = new Map()   //to store data as map data structure 
    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i])  //set map to key vale pair 
    }
    heights.sort((a, b) => b - a);  
    for (let i = 0; i < heights.length; i++){
        names[i] = map.get(heights[i]);   //get height from map then send to names[i]
    }
    return names;

}
console.log(sortPeople(names, heights));
