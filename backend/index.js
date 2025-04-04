const express = require('express');
const cors = require('cors');

require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@jabir-bhuiyan.gzyvl.mongodb.net/?retryWrites=true&w=majority&appName=Jabir-Bhuiyan`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect(); //comment this letter ****
    const userCollection = client.db('Jabir-Bhuiyan').collection('user')

    app.get('/user', async (req, res) => {
      const result = await userCollection.find().toArray();
      res.status(200).json(result);
    })


    // Connect the client to the server

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}


// Start the MongoDB connection
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server is running');
})

// Server listening on a port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});