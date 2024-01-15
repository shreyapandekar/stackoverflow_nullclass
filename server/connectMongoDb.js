import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // process.env.CONNECTION_URL,
    "mongodb+srv://Aditya:Aak1112004@cluster0.8qisqdl.mongodb.net/stackoverflow?retryWrites=true&w=majority",
       {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
