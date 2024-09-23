export default function loadBalancer(chinaDownload, USDownload) {
  const resolved = Promise.any([chinaDownload, USDownload]).then(
    (value) => value
  );
  return resolved;
}
