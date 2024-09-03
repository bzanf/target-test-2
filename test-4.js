const DATA = [
    { uf: "SP", value: 67836.43 },
    { uf: "RJ", value: 36678.66 },
    { uf: "MG", value: 29229.88 },
    { uf: "ES", value: 27165.48 },
    { uf: "Outros", value: 19849.53 }
];

function main() {
    const total = DATA.reduce((accum, current) => accum + current.value, 0);

    console.log('O faturamento total mensal foi', total);
    console.log('O percentual de participação de cada UF foi:');

    DATA.forEach(x => {
        console.log(x.uf + ':', (x.value / total * 100).toFixed(2), '%');
    });
}

main();