import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const response = await mongoose.connect("mongodb+srv://jeydev007:uWGTs9KCMWRrcpCO@cluster0.5u57x.mongodb.net/");
    console.log("Connected to DB", response);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to DB:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  }
};
