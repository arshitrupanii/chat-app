import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

export const createdb = async () => {
    try {
        const connect = mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to Mongo")

    } catch (err) {
        console.log("error connecting to Mongo " + err.message)
    }
}