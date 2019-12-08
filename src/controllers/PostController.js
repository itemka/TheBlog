import PostModel from "../models/Post";

// the controller is a description of how i can make a request
class PostController {

    index(request, response) {
        // find posts
        PostModel.find().then((error, posts) => {
            if (error) {
                response.send(error);
            }
            response.json(posts);
        })
    }

    create(request, response) {
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
    }

    read(request, response) {
        // search post by id
        PostModel.findOne(
            {_id: request.params.id}
        ).then(post => {
            if (!post) {
                response.send({error: 'not found'})
            } else {
                response.json(post)
            }
        })
    }

    update(request, response) {
        // find by id and update
        PostModel.findByIdAndUpdate(
            request.params.id,
            {$set: request.body},
            error => {
                if (error) {
                    response.send(error)
                }
                response.json({status: 'updated'})
            }
        )
    }

    delete(request, response) {
        // delete post by _id from /:id
        PostModel.remove({
            _id: request.params.id
        }).then(post => {
            if (post) {
                response.json({status: 'ok'});
            } else {
                response.json({status: 'error'})
            }

        })
    }
}

export default PostController;