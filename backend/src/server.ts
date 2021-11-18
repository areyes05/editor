import {Request, Response} from 'express';
import {mockedUser} from './mocks';
import {deletePosts, getPosts, savePost} from './store';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.disable('x-powered-by');
const router = express.Router();
const cors = require('cors');
const port = 3000;

app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.set('etag', false);

router.post('/login', async (_: Request, res: Response) => {
  res.json(mockedUser);
});

router.post('/post', async (req: Request, res: Response) => {
  const post = await savePost(req.body.post);
  res.json(post);
});

router.get('/posts', async (_: Request, res: Response) => {
  const posts = await getPosts();
  res.json(posts);
});

router.get('/deletePosts', async (req: Request, res: Response) => {
  const posts = await deletePosts();
  res.json(posts);
});

router.get(/\/user\/[A-Za-z\-]+/, async (_: Request, res: Response) => {
  res.json(mockedUser);
});

router.get('/', (_: Request, res: Response) => {
  res.json({test: 'another'});
});

app.use('/', router);
app.listen(port,
  () => console.log(`Example listening on port ${port}`)
);
