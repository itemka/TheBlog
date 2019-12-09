import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

const cors = require('cors');

import PostController from "./controllers/PostController";
// create instance
const Post = new PostController();

const app = express();
// connect to localhost:27017/postsDB
mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true});

// bodyParser post require and received all data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

// get, post, delete, put handlers
app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(333, () => console.log('333 port is listening...'));