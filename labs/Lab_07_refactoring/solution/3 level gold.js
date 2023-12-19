let employeesAmount = undefined;
while(employeesAmount === undefined) {
    let input = prompt('Введите кол-во человек', undefined);
    if (!isNaN(parseFloat(input))) {
        employeesAmount = parseFloat(input);  
    }
}

let salary = undefined;
while(salary === undefined) {
    let input = prompt('Введите зарплату на человека', undefined);
    if (!isNaN(parseFloat(input))) {
        salary = parseFloat(input);
    }
}

alert('Затраты на ЗП: ' + employeesAmount * salary);