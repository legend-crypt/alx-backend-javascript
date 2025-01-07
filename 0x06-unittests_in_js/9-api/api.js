import express from 'express';

const app = express();
app.get('/', (_req, res) => {
  return res.status(200).send('Welcome to the payment system');
});
app.get('/cart/:id', (req, res) => {
  const id = req.params.id;
  const cartId = Number(id);
  if (isNaN(cartId)) {
    return res.status(404).send('Invalid cart ID');
  }
  return res.status(200).send(`Payment methods for cart :${cartId}`);
});
app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});
export default app;
