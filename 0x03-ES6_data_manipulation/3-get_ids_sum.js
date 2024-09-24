export default function getStudentIdsSum(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }
  const sumIds = studentList.reduce(
    (accumlator, value) => accumlator + value.id,
    0
  );
  return sumIds;
}
