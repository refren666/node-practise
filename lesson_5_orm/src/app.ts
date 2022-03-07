import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/user';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get('/users', async (req:Request, res:Response) => {
  try {
    const users = await getManager().getRepository(User).find();
    console.log(users);
    res.json(users);
  } catch (err) {
    console.log(err);
  }
});

// app.post('/users', async (req:Request, res:Response) => {
//   console.log(req.body);
//   const createdUser = await getManager().getRepository(User).save(req.body);
//   res.json(createdUser);
// });

app.listen(7000, async () => {
  console.log('Server started!');

  try {
    const connection = await createConnection();
    if (connection) {
      console.log('Database connected');
    }
  } catch (e) {
    console.log(e);
  }
});
