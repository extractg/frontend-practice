const students = [
    { name: "Anna", score: 85, active: true },
    { name: "John", score: 42, active: true },
    { name: "Mike", score: 91, active: false },
    { name: "Sara", score: 76, active: true },
    { name: "Alex", score: 55, active: false },
    { name: "Kate", score: 94, active: true },
];

// active === true
// score >= 70
// result should be only names
// using score names result should be from bigges to smallest in names

const greatStudents = students.filter((student) => {
   return student.active === true && student.score >= 70
})
greatStudents.sort((student, student2) => {
    return student2.score - student.score
})
const newArray = greatStudents.map((student) => {
    return student.name
})

// const newArray = students
//     .filter((student) => student.active && student.score >= 70)
//     .sort((a, b) => b.score - a.score)
//     .map((student) => student.name);