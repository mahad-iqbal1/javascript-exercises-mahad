const sumAll = function(num1, num2) {
    let sum = 0;
    let biggerNum = 0;
    let smallerNum = 0;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR"; 
    } else {
        if (num1 > num2) {
            biggerNum = num1;
            smallerNum = num2;
        } else {
            biggerNum = num2;
            smallerNum = num1;
        }
    
        for (let i = smallerNum; i <= biggerNum; i++) {
            sum += i;
        }
    
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
