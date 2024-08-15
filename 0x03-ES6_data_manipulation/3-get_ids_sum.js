export default function getStudentIdsSum(students) {
  return students.reduce((a, c) => a + c.id, 0);
}
