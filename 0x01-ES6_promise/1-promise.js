export default function getFullResponseFromAPI(arg) {
  const promise = new Promise((resolve, reject) => {
    if (arg) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject('The fake API is not working currently');
    }
  });
  return promise;
}
