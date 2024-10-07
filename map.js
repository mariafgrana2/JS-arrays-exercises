// Exercise #2
const numbers = [5, 10, 15, 20, 25];

function printDoubles() {
    const doubles = numbers.map((num) => num * 2);
    const resultMap = document.getElementById('result-map');
    resultMap.textContent = `Dobles: [${doubles.join(', ')}]`;
}
printDoubles();