export default function getStudentsByLocation(studentList, location) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const students = studentList.filter((value) => value.location === location);
  return students;
}
