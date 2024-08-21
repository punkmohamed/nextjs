import { MongoClient } from "mongodb";


const mongoClient = new MongoClient("mongodb://localhost:27017/Nextjs");
const clientPromise = mongoClient.connect();


export default clientPromise;
