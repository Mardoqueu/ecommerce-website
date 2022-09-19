import express from 'express';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';
import data from './data';


mongoose.connect(config.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch((error) =>{
  console.log(error.reason);
})
const app = express();
app.use(cors()); 
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});

app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});