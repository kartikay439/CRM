import mongoose from "mongoose";
import user from "../../domain/entities/User.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_URI}/${process.env.DB_NAME}`,
        );
        console.log(`\n MongoDB connected Succesfully !!! DB Host ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mongo db connection error", error);
        process.exit(1)
    }
}
export default connectDB;