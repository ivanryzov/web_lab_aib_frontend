var num_person = prompt('Введите кол-во человек ', undefined);
if (!isNaN(parseFloat(num_person))) num_person = parseFloat(num_person)
else num_person = 0;
while(num_person=== 0)
{ var num_person = prompt('Введите кол-во человек ', undefined);
    if (!isNaN(parseFloat(num_person))) {
        num_person= parseFloat(num_person)
    }else num_person= 0;
}
var salary = prompt('Введите зарплату на человека ', undefined);
if (!isNaN(parseFloat(salary ))){salary =parseFloat(salary );} else {salary =0;}
while(num_person=== 0) {
    var salary  = prompt('Введите зарплату на человека ', undefined);
    if (!isNaN(parseFloat(salary ))) {
        salary  = parseFloat(salary )
    } else {
        salary  = 0;
    }
}
alert('Затраты на ЗП' + num_person * salary );

let num_person = prompt('Введите кол-во человек ', undefined);
if(num_person === !NaN){ 

}
else()
