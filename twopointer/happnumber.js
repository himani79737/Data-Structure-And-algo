
var isHappy = function (n) {
    let set = new Set()
    var sumofsquare = function (n) {
        let sum = 0
        while (n > 0) {
            let digit = n % 10;
            sum += digit * digit;
            n = Math.floor(n / 10);
        }
        return sum;

    };
    while (!set.has(n)) {
        set.add(n);
        n = sumofsquare(n);
        if (n === 1) {
            return true;
        }
    }

    return false;
};


console.log(isHappy(13));
