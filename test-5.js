import readlineSync from 'readline-sync';

function main() {
    const inputText = readlineSync.question('Digite o texto a ser invertido: ');

    let reversedText = '';

    for (let index = inputText.length - 1; index >= 0; index--) {
        reversedText += inputText[index];
    }

    console.log('Resultado:', reversedText);
}

main();