import { MongoClient } from 'mongodb'
import 'dotenv/config'

// eslint-disable-next-line no-unused-vars
import * as insert from './insert.js';
// eslint-disable-next-line no-unused-vars
import * as search from './search.js';

const connectionString = process.env.ATLAS_URI;

//initialize mongo client
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


// initialize connect to mongo db
export async function MongoConnect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }
  
}


