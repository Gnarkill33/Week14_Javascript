const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => (Math.round(Math.random() * max)))
  );

const grades = generateArray(12, 100);
console.log(grades);

// Выводим средний балл студентов

const getAverageGrade = (grades) => {
    let sum = grades.reduce((sum, current) => sum + current, 0); 
    let length = grades.length;
    console.log(Math.round(sum / length));
};
getAverageGrade(grades);

// Выводим максимальный балл среди студентов

const getHighestGrade = (grades) => { 
    const gradesSorted = grades.sort(function(a, b) {
    return (a - b)});
    console.log(gradesSorted[gradesSorted.length - 1]);
    console.log(gradesSorted);
};
getHighestGrade(grades);

// Выводим минимальный балл среди студентов

const getLowestGrade = (grades) => { 
    const gradesSorted = grades.sort(function(a, b) {
    return (b - a)});
    console.log(gradesSorted);
    console.log(gradesSorted[gradesSorted.length - 1]);
};
getLowestGrade(grades);

// Выводим кол-во студентов с положительной оценкой (>= 60)
// Выводим кол-во оставшихся оценок

const showGoodStudents = (grades) => {
    const goodStudents = grades.filter(item => item >= 60);
    console.log(goodStudents.length);
    const otherStudents = grades.length - goodStudents.length;
    console.log(otherStudents);
};
showGoodStudents(grades);

// Выводим кол-во студентов с отрицательной оценкой (< 60)
// Выводим кол-во оставшихся оценок 

const showBadStudents = (grades) => {
    const badStudents = grades.filter(item => item < 60);
    console.log(badStudents.length);
    const restOfStudents = grades.length - badStudents.length;
    console.log(restOfStudents);
};
showBadStudents(grades);

// Преобразуем числовые оценки в буквенные (формат A/B/C/D/E)


const showLetterGrades = (grades) => {
    const letterGrades = grades.map(function (grade) {
        if (grade >= 80 && grade <= 100)
        return "A";

        if (grade >= 60 && grade <= 79)
        return "B";

        if (grade >= 40 && grade <= 59)
        return "C";

        if (grade >= 20 && grade <= 39)
        return "D";
        
        if (grade < 20)
        return "E";
       }
    )
    console.log(letterGrades);
    }
    showLetterGrades(grades);