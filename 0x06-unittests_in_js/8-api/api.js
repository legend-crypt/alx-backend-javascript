import express from 'express';

const app = express();
app.get('/', (_req, res) => {
  res.status(200).send('Welcome to the payment system');
});
app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});
export default app;
