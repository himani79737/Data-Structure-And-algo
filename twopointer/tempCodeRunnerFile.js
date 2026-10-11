let n = 39;
        let digit = n % 10;      // get last digit
        sum += digit * digit;    // add square of digit
        n = Math.floor(n / 10);  