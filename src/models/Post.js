import mongoose, {Schema} from 'mongoose';

// create instance Schema from 'mongoose'
const PostSchema = new Schema(
    {
        title: String,
        text: String
    },
    {
        versionKey: false
    },
    {
        timestamp: true // added data to posts
    }
);

// PostModel Object
export const Post = mongoose.model('Post', PostSchema);

export default Post;