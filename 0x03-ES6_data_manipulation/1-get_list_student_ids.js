export default function get_list_studentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const studentIds = studentList.map((value) => value.id);
  return studentIds;
}
