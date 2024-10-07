const printSumAndProductOfArray = (arr) => {
    const sumResult = arr.reduce((acc, current) => acc + current);
    const productResult = arr.reduce((acc, current) => acc * current);
    const resultReduceOperation = document.getElementById('result-reduce');
    resultReduceOperation.textContent = `Array ingresado: [${arr.join(', ')}].  La suma es: ${sumResult} y el producto es: ${productResult}.`;
};
printSumAndProductOfArray([2, 4, 6, 8]);