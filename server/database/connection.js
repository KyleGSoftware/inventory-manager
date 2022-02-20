import { MongoClient } from 'mongodb'
import 'dotenv/config'
import * as insert from './insert.js';
import * as search from './search.js';

const connectionString = process.env.ATLAS_URI;

//initialize mongo client
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const items = [{Name:"Test"}, {Name:"Test2"}];

// initialize connect to mongo db
async function MongoConnect() {
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  } finally {
    // await client.close();
  }
  
}




MongoConnect().catch(console.error);

