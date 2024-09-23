export default function createEmployeesObject(department, employees) {
  const obj = {};
  obj[department] = employees;
  return obj;
}
