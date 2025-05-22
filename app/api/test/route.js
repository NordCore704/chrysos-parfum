import { connectMongoDB } from "@/lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
    try {
      await connectMongoDB(); // Ensure connection to MongoDB
      const db = mongoose.connection; // Access the Mongoose connection
      const collection = db.collection("chrysos-parfum"); // Replace with your collection name
  
      const data = await collection.find({}).toArray();
  
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error(error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch data from MongoDB" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }
  