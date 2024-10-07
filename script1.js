function sumEvenOdd() {
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            evenSum += i; 
        } else {
            oddSum += i;
        }
    }
return {
    evenSum: evenSum,
    oddSum: oddSum
};
}

const result = sumEvenOdd();
console.log("Lyg. skaič suma:", result.evenSum);
console.log("Nelyg. skaič suma:", result.oddSum);

