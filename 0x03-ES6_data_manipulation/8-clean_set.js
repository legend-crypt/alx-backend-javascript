export default function cleanSet(set, string) {
  let parts = [];
  if (!string) return "";
  for (const value of set) {
    if (string && value.startsWith(string)) {
      parts.push(value.slice(string.length));
    }
  }
  return parts.join("-");
}
