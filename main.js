document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let a = document.getElementById('value1').value;
    let b = document.getElementById('value2').value;
    let sign = document.getElementById('sign').value;


    if (!["+", "-", "/", "*"].includes(sign)) {
        alert('Вы ввели неправильно математический знак.')
        return
    }
    if (b == 0 && sign === '/') {
        alert('На ноль делить нельзя. Поменяйте значения.')
        return
    };
    
    let result = Math.round(eval(`${a} ${sign} ${b}`));

    document.getElementById('result').value = result;
});