import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostController from "./controllers/PostController";
// create instance
const Post = new PostController();

const app = express();
// connect to localhost:27017/postsDB
mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true});

// bodyParser post require and received all data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// get, post, delete, put handlers
app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(3000, () => console.log('3000 port is listening...'));