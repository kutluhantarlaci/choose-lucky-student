const students = []
const allStudents = ['Aytekin', 'Berna', 'Çağrı', 'Doğu', 'Emine', 'Ferhat', 'Hale', 'Kutluhan', 'Özlem', 'Sena', 'Semih', 'Ufuk']
const luckyStudentElm = document.getElementById('luckyStudentContainer')
const btnElm = document.getElementById('btn')
const checkboxes = document.getElementsByClassName('student')
const studentsElm = document.getElementById('students')
btnElm.addEventListener('click', getLuckyStudent)

allStudents.forEach((item, i) => {
    studentsElm.innerHTML +=
        `<label for="${item}"><input type="checkbox" class="student" id="${item}" onclick="addStudent(${i})">${item}</label>`

})

function addStudent(i) {

    if (students.includes(checkboxes[i].id)) {
        students.splice(students.indexOf(checkboxes[i].id), 1)
    } else {
        students.push(checkboxes[i].id)
    }
}

function getLuckyStudent() {
    let currrentStudent = luckyStudentElm.innerText
    if (students.length == 0) {
        alert('No one is selected')
    } else {
        let luckyStudent = students[Math.floor(Math.random() * students.length)]
        luckyStudentElm.innerText = luckyStudent

        if (currrentStudent == luckyStudent) {
            getLuckyStudent()
        }
    }
}
