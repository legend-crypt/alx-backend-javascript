export default function updateStudentGradeByCity(
  studentList,
  location,
  newGrades
) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const filteredStudents = studentList.filter(
    (student) => student.location === location
  );
  const updatedStudents = filteredStudents.map((student) => {
    for (const grade of newGrades) {
      if (student.id === grade.studentId) {
        student["grade"] = grade.grade;
        break;
      } else {
        student["grade"] = "N/A";
      }
    }
    return student;
  });
  return updatedStudents;
}
