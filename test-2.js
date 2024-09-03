import readlineSync from 'readline-sync';

function iterativeOption(testNumber) {
    let fibonacciNumbers = [0, 1];
    
    while (fibonacciNumbers[fibonacciNumbers.length - 1] < testNumber) {
        const length = fibonacciNumbers.length;
        const beforeLast = fibonacciNumbers[length - 2];
        const last = fibonacciNumbers[length - 1];

        fibonacciNumbers.push(beforeLast + last);
    }

    return [fibonacciNumbers[fibonacciNumbers.length - 1], fibonacciNumbers[0]].includes(testNumber);
}


function binetFormulaOption(testNumber) {
    function isPerfectSquare(number) {
        let sqrt = Math.sqrt(number);
        return sqrt === Math.floor(sqrt);
    }

    return isPerfectSquare(5 * (testNumber ** 2) + 4) || isPerfectSquare(5 * (testNumber ** 2) - 4);
}


function main() {
    const options = ['Algoritmo iterativo', 'Formula de Binet'];
    const index = readlineSync.keyInSelect(options, 'Utilizar qual solucao?');

    if (index === -1)
        return;

    const inputNumber = readlineSync.questionInt('Informe o numero a ser verificado: ');

    const belongsToFibonacci = index === 0
        ? iterativeOption(inputNumber)
        : binetFormulaOption(inputNumber);

    console.log(`O numero ${inputNumber} ${belongsToFibonacci ? '' : 'nao '}pertence a sequencia de Fibonacci`);
}

main();