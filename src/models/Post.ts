import { model as mongooseCreateModel, Schema } from "mongoose";
import IPost from "../interfaces/Post";
import MongoModel from "./MongoModel";

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    minlength: 5,
    maxlength: 50,
    required: true,
  },
  content: {
    type: String,
    minlength: 10,
    required: true,
  },
});

class Post extends MongoModel<IPost> {
  constructor() {
    super(mongooseCreateModel("Post", postSchema));
  }
}

export default Post;
