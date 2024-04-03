function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let average = Math.round(sum/3);
    return average;
}
// console.log(averageThreeNumbers(3, 4, 5));


function createSentence(num, noun) {
    return `On average, a Berkeley student has ${num} ${noun}s.`
}
// console.log(createSentence(3, "hat"));


function getRandomNum(max) {
    // Math.floor(): always rounds down and returns the largest integer less than or equal to a given number.
    return Math.floor(Math.random() * max);
}
// console.log(getRandomNum(6));


let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13); 

avg = averageThreeNumbers(x, y, z);

sentence = createSentence(avg, "dog");

console.log(sentence);