import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

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
app.get('/available_payments', (_req, res) => {
  return res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});
app.post('/login', (req, res) => {
  let username = '';
  console.log(req.body);
  if (req.body) {
    username = req.body.username;
  }
  return res.json(`Welcome ${username}`);
});
app.listen(7865, 'localhost', () => {
  console.log('API available on localhost port 7865');
});
export default app;
