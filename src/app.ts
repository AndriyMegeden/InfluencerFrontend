export {}

// створюєм api. Встановлюєм це npm install -g nodemon і запускаєм по команді nodemon app.
// app це назва, може бути любою
// якщо у нас ts файл а не js то така команда
//nodemon --watch "src/**" --ext "ts,json" --ignore "src/**/*.spec.ts" --exec "ts-node src/.ts"


import express from 'express';

import { ObjectId } from 'mongodb';
import { connectToDb, getDb } from './db';

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

let db: any;

connectToDb((err: any) => {
  if (!err) {
    app.listen(3000, () => {
      console.log('app listening on port 3000');
    });
    db = getDb();
  }
});

app.get('/influencer-users', (req, res) => {
  let users: any[] = [];

  db.collection('influencer-users')
    .find()
    .sort({ author: 1 })
    .forEach((book: any) => users.push(book))
    .then(() => {
      res.status(200).json(users);
    })
    .catch(() => {
      res.status(500).json({ error: 'could not fetch the documents' });
    });
});

app.get('/influencer-users/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('influencer-users')
      .findOne({ _id: new ObjectId(req.params.id) })
      .then((doc: any) => {
        res.status(200).json(doc);
      })
      .catch((err: any) => {
        res.status(500).json({ error: 'could not fetch the document' });
      });
  } else {
    res.status(500).json({ error: 'Not a valid id' });
  }
});

app.post('/influencer-users', (req, res) => {
  const book = req.body;
  db.collection('influencer-users')
    .insertOne(book)
    .then((result: any) => {
      res.status(201).json(result);
    })
    .catch((err: any) => {
      res.status(500).json({ err: 'Could not create a new document' });
    });
});

app.delete('/influencer-users/:id', (req, res) => {
  if (ObjectId.isValid(req.params.id)) {
    db.collection('influencer-users')
      .deleteOne({ _id: new ObjectId(req.params.id) })
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: any) => {
        res.status(500).json({ error: 'could not delete the document' });
      });
  } else {
    res.status(500).json({ error: 'Not a valid id' });
  }
});

app.patch('/influencer-users/:id', (req, res) => {
  const updates = req.body;

  if (ObjectId.isValid(req.params.id)) {
    db.collection('influencer-users')
      .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
      .then((result: any) => {
        res.status(200).json(result);
      })
      .catch((err: any) => {
        res.status(500).json({ error: 'could not update the document' });
      });
  } else {
    res.status(500).json({ error: 'Not a valid id' });
  }
});
