import { readFileSync } from 'fs';

function main() {
    const data = readFileSync('./data/dados.json');
    const jsonData = JSON.parse(data);

    let lowestValues = [];
    let highestValues = [];
    let average = 0;

    for (let index = 0; index < jsonData.length; index++) {
        const day = jsonData[index];

        // Lowest values
        if (lowestValues.length === 0 || day.valor < lowestValues[0].valor) {
            lowestValues = [day];
        } else if (day.valor === lowestValues[0].valor) {
            lowestValues.push(day);
        }

        // Highest values
        if (highestValues.length === 0 || day.valor > highestValues[0].valor) {
            highestValues = [day];
        } else if (day.valor === highestValues[0].valor) {
            highestValues.push(day);
        }

        // Sum value
        average += day.valor;
    }

    // Average & days above average
    average = average / jsonData.filter(x => x.valor > 0).length;
    const daysAboveAverage = jsonData.filter(x => x.valor > average).length;

    // Lowest value
    console.log(
        'O menor valor de faturamento no mês foi', lowestValues[0].valor,
        'e ocorreu no(s) dia(s)', lowestValues.map(day => day.dia).join(', ')
    );

    // Highest value
    console.log(
        'O maior valor de faturamento no mês foi', highestValues[0].valor,
        'e ocorreu no(s) dia(s)', highestValues.map(day => day.dia).join(', ')
    );

    // Days above average
    console.log(
        'A média de faturamento mensal foi', average,
        'e o número de dias em que o valor de faturamento diário foi superior à média mensal foi', daysAboveAverage
    );

}

main();