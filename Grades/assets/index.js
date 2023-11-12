const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => (Math.round(Math.random() * max)))
  );

const grades = generateArray(12, 100);
console.log(grades);

// Выводим средний балл студентов

// ?????????????????????????????????????????????????????????/ 
// вопрос по length

const getAverageGrade = () => {
    let sum = grades.reduce((sum, current) => sum + current, 0); 
    let length = grades.length;
    console.log(Math.round(sum / length));
};
getAverageGrade();

// Выводим максимальный балл среди студентов

const getHighestGrade = () => { 
    const gradesSorted = grades.sort(function(a, b) {
    return (a - b)});
    console.log(gradesSorted[gradesSorted.length - 1]);
    console.log(gradesSorted);
};
getHighestGrade();

// Выводим минимальный балл среди студентов

const getLowestGrade = () => { 
    const gradesSorted = grades.sort(function(a, b) {
    return (b - a)});
    console.log(gradesSorted);
    console.log(gradesSorted[gradesSorted.length - 1]);
};
getLowestGrade();

// Выводим кол-во студентов с положительной оценкой (>= 60)
// Выводим кол-во оставшихся оценок

const showGoodStudents = () => {
    const goodStudents = grades.filter(item => item >= 60);
    console.log(goodStudents.length);
    const otherStudents = grades.length - goodStudents.length;
    console.log(otherStudents);
};
showGoodStudents();

// Выводим кол-во студентов с отрицательной оценкой (< 60)
// Выводим кол-во оставшихся оценок 

const showBadStudents = () => {
    const badStudents = grades.filter(item => item < 60);
    console.log(badStudents.length);
    const restOfStudents = grades.length - badStudents.length;
    console.log(restOfStudents);
};
showBadStudents();

// Преобразуем числовые оценки в буквенные (формат A/B/C/D/E)


const showLetterGrades = (grades) => {
    switch (grades) {
        case (80 >= grades <= 100):
            grades = "A";
            break;
        case (60 >= grades <= 79):
            grades = "B";
            break;
        case (40 >= grades <= 59):
            grades = "C";
            break;
        case 20 >= grades <= 39:
            grades = "D";
            break;
        case grades < 20:
            grades = "E";
            break;
        default:
            grades = "Undefined";
}
console.log(grades);
}
showLetterGrades();

