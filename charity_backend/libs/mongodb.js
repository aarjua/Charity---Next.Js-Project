import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI environment variable not defined.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
   // Check connection state
    if (mongoose.connection.readyState === 1) { // 1 means connected
      console.log("Connected to MongoDB successfully");
    } else {
      console.log("Connected to MongoDB but not in a ready state:", mongoose.connection.readyState);
    }

  } catch (error) {
    console.log("error:", error);
  }
};

export default connectMongoDB;
