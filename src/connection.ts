import mongoose from "mongoose";
import "dotenv/config";

const DATABASE_URL = "mongodb://localhost:27017/BlogApi";

const connectToDatabase = (
  mongoDatabaseURI = process.env.DATABASE_URL || DATABASE_URL
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
