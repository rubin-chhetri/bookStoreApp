import mongoose from "mongoose";

const dbConnect= async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName: "BookStore"
        });
        console.log("Database connected");
    } catch (error) {
        console.log("error:",error);
    }
}

export default dbConnect