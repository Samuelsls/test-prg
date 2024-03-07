//7
let classA = new Clazz("classA");
let classB = new Clazz("classB");

for (let i = 1; i <= 10; i++) {
    let student = new Student(`Student${i}`, `Lastname${i}`, i + 15, "");

    if (student.vek < 18) {
        student.nazevTridy = classA.nazev;
        classA.studenti.push(student);
    } else {
        student.nazevTridy = classB.nazev;
        classB.studenti.push(student);
    }
}
//8
classA.studenti.forEach(student => student.nazevTridy = classA.nazev);
classB.studenti.forEach(student => student.nazevTridy = classB.nazev);

const classAList = document.getElementById('classAStudents');
const classBList = document.getElementById('classBStudents');

classA.studenti.forEach(student => {
    const listItem = document.createElement('li');
    listItem.textContent = `${student.jmeno} ${student.prijmeni} - ${student.nazevTridy}`;
    classAList.appendChild(listItem);
});

classB.studenti.forEach(student => {
    const listItem = document.createElement('li');
    listItem.textContent = `${student.jmeno} ${student.prijmeni} - ${student.nazevTridy}`;
    classBList.appendChild(listItem);
});
