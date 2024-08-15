export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const stud = student;
    for (const grade of newGrades) {
      if (stud.id === grade.studentId) {
        stud.grade = grade.grade;
      }
    }
    return stud;
  });
  return newStudents;
}
