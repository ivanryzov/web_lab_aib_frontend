let students = [
    { FIO: 'Петров А.А.', Mark: 5 },
    { FIO: 'Иванов Б.Б.', Mark: 3.4 },
    { FIO: 'Сидоров Г.Г.', Mark: 9 },
    { FIO: 'Немолодой Д.Д', Mark: 2 },
    { FIO: 'Молодой Е.Е', Mark: 3.4 }
];

let totalScore = 0;
let numberOfStudents = 0;
let badStudents = [];

for (let i = 0; i < students.length; i++) {
    let currentScore = students[i].Mark;

    if (currentScore < 0 || currentScore > 5) {
        console.log('Оценка ' + currentScore + ' не учитывается, так как не соответствует допустимым значениям');
        continue;
    }

    if (currentScore < 4) {
        badStudents.push(students[i]);
    }

    totalScore += currentScore;
    numberOfStudents++;
}

let averageScore = totalScore / numberOfStudents;
console.log('Средняя оценка: ' + averageScore);

console.log('Плохие студенты:');
if (badStudents.length === 0) {
    console.log('Таких нет');
} else {
    badStudents.forEach(student => {
        console.log('ФИО: ' + student.FIO + '; Оценка: ' + student.Ocenka);
    });
}