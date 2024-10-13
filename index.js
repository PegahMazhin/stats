const userInput = prompt("Please enter numbers separated by commas:");

const numberArray = userInput.split(',').map(num => Number(num.trim()));

 getLength=(arr)=> {
    return arr.length;
}

 getSum=(arr)=> {
    return arr.reduce((acc, num) => acc + num, 0);
}

 getMean=(arr)=> {
    return getSum(arr) / getLength(arr);
}

 getMin=(arr)=> {
    return Math.min(...arr);
}

 getMax=(arr)=> {
    return Math.max(...arr);
}

 getRange=(arr)=> {
    return getMax(arr) - getMin(arr);
}

 getEvens=(arr)=> {
    return arr.filter(num => num % 2 === 0);
}

 getOdds=(arr)=> {
    return arr.filter(num => num % 2 !== 0);
}
