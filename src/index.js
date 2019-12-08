import mongoose from 'mongoose';
import PostModel from './models/Post';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
// connect to localhost:27017/postsDB
mongoose.connect('mongodb://localhost:27017/blogDB', {useNewUrlParser: true});

// bodyParser post require and received all data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// post handler
app.post('/posts', (request, response) => {
    // data from users
    let data = request.body;
    console.log(`Added new post: `, data);

    // create instance PostModel Object
    const post = new PostModel({
        title: data.title,
        text: data.text
    });

    // saved post and send response
    post.save().then(() => {
        console.log(`New post added!`);
        response.send({status: 'ok'});
    });
});

app.listen(3000, () => console.log('3000 port is listening...'));