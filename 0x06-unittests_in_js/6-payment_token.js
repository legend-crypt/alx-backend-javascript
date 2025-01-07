function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, _reject) => {
    if (success) {
      return resolve({ data: 'Successful response from the API' });
    }
  });
}

export default getPaymentTokenFromAPI;
