import getListStudents from "./0-get_list_students.js";
import updateStudentGradeByCity from "./4-update_grade_by_city.js";

console.log(
  updateStudentGradeByCity(getListStudents(), "Accra", [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 },
  ])
);

console.log(
  updateStudentGradeByCity(getListStudents(), "Accra", [
    { studentId: 5, grade: 97 },
  ])
);
