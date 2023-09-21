//Создаем переменные, которые являются ID кнопок в HTML
const input1Element = document.getElementById('input1'); // Окно ввода первой переменной
const input2Element = document.getElementById('input2'); // Окно ввода второй переменной
const input3Element = document.getElementById('input3'); // Окно ввода второй переменной
const resultBtn = document.getElementById('result'); //Окно вывода результата калькулятора
const submitBtn = document.getElementById('submit'); //Кнопка для нажатия результата

console.log(result)

//Если число > 0, то цвет будет зеленый, если число < 0, то цвет будет красный, если число == 0, то будет черный цвет
function printColor(result) {
    if (result > 0) {
        resultBtn.style.color = 'green';
    } else if (result == 0) {
        resultBtn.style.color = 'black';
    } else if (result < 0) {
        resultBtn.style.color = 'red';
    }
}


// Здесь будет выводиться результат, реализованный с помощью функции, в которой при нажатии на кнопку "Вычислить", происходит операция + или - или * или /, выполненный через
// условие
submitBtn.onclick = function () {
    const resultCalculate = Math.pow(Number(input2Element.value), 2) - 4 * Number(input1Element.value) * Number(input3Element.value);
    if (resultCalculate > 0) {
        const x1 = (-Number(input2Element.value) + Math.sqrt(resultCalculate)) / (2 * Number(input1Element.value));
        const x2 = (-Number(input2Element.value) - Math.sqrt(resultCalculate)) / (2 * Number(input1Element.value));
        resultBtn.textContent = `D = ${resultCalculate}, корень x1 = ${x1}, корень x2 = ${x2}`;

    } else if (resultCalculate == 0 ) {
        const x = - (Number(input2Element.value)) / (2 * Number(input1Element.value));
        resultBtn.textContent = `D = ${resultCalculate}, корень x = ${x}`;
    } else if (resultCalculate < 0) {
        resultBtn.textContent = `D = ${resultCalculate}, корней в данном примере нет`;
    }
}
  



