
import * as mongodb from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env

if (!MONGODB_URI) {
    throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
    )
}

if (!MONGODB_DB) {
    throw new Error(
        'Please define the MONGODB_DB environment variable inside .env.local'
    )
}

let cachedClient: mongodb.MongoClient; // typescript
let cachedDb: mongodb.Db; //typescript


export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }

    const client = await mongodb.MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

   
    return {client, db};
}