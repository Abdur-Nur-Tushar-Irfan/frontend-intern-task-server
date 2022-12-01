const { MongoClient, ServerApiVersion } = require('mongodb');
const express=require('express')
const cors=require('cors')
const app=express();
const port=process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())
require('dotenv').config();


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fpvwzmp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri)


app.get('/',(req,res)=>{
    res.send('Frontend intern task server is running')
})

app.listen(port,()=>{
    console.log(`Frontend intern task server is running on ${port}`)
})