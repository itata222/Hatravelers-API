import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("DB is connected!");
  } catch (err) {
    console.log("DB is NOT connected");
    process.exit(1);
  }
};

const disconnectFromDB = async () => {
  try {
    await mongoose.disconnect();
    console.log("DB is Disconnected");
  } catch (err) {
    console.log("DB is NOT being disconnected");
  }
};

const DB = { connectToDB, disconnectFromDB };

export default DB;
