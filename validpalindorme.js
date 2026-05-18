let s = "A man, a plan, a canal: Panama";

var isplaindrome = function(s){
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let result = true;
    let right = s.length -1;
    let left = 0;
    while(left < right){
        if(s[left] !== s[right]){
            result = false;
            break;
    }
    left++;
    right--;
}
 return result;
}
