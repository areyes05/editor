"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocks_1 = require("./mocks");
const store_1 = require("./store");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.disable('x-powered-by');
const router = express.Router();
const cors = require('cors');
const port = 3000;
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.set('etag', false);
router.post('/login', async (_, res) => {
    res.json(mocks_1.mockedUser);
});
router.post('/post', async (req, res) => {
    const post = await (0, store_1.savePost)(req.body.post);
    res.json(post);
});
router.get('/posts', async (_, res) => {
    const posts = await (0, store_1.getPosts)();
    res.json(posts);
});
router.get('/deletePosts', async (req, res) => {
    const posts = await (0, store_1.deletePosts)();
    res.json(posts);
});
router.get(/\/user\/[A-Za-z\-]+/, async (_, res) => {
    res.json(mocks_1.mockedUser);
});
router.get('/', (_, res) => {
    res.json({ test: 'another' });
});
app.use('/', router);
app.listen(port, () => console.log(`Example listening on port ${port}`));
