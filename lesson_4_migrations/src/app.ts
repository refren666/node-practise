import express from 'express';
import { users } from './users';

const app = express();

app.get('/', (req, res) => {
  console.log(users);
  res.end();
});

app.listen(9000, () => {
  console.log('Server started!');
});
