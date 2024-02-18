import mongoose from "mongoose";

export const connect = async () => {
  try {
    const mongoUrl = process.env.MONGODBURL;
    if (!mongoUrl) {
      throw new Error("Mongodb url is not specified");
    }
    mongoose.connect(mongoUrl);
    const connection = mongoose.connection;
    connection.on("connected", () => console.log("db is connected"));
    connection.on("error", () => console.error("Connection error"));
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error while connecting to Mongo", error);
  }
};
