document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let a = document.getElementById('value1').value;
    let b = document.getElementById('value2').value;
    let sign = document.getElementById('sign').value;

    if (isNaN(a)) {
        alert('Вы ввели неправильное значение. Первое значение должно быть числом.')
        return
    } else if (isNaN(b)) {
        alert('Вы ввели неправильное значение. Второе значение должно быть числом.')
        return
    } else if (!["+", "-", "/", "*"].includes(sign)) {
        alert('Вы ввели неправильно математический знак.')
        return
    } else if (b == 0 && sign === '/') {
        alert('На ноль делить нельзя. Поменяйте значения.')
        return
    };
    
    let result = Math.round(eval(`${a} ${sign} ${b}`));

    document.getElementById('result').value = result;
});
