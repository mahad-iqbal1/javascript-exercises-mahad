const removeFromArray = function(array, ...arg) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let toRemove = false;

        for (let j = 0; j < arg.length; j++) {
            if (array[i] === arg[j]) {
                toRemove = true;
                break;
            }
        }

        if (toRemove === false) {
            newArray.push(array[i]);
        } 
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
