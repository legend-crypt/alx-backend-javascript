export default function loadBalancer(chinaDownload, USDownload) {
  const resolved = Promise.race([chinaDownload, USDownload]);
  return resolved;
}
