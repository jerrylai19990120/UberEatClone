
const express = require('express');

const router = express.Router();

const uri = "mongodb+srv://jerrylai:tgs338890900@cluster0.gh6gt.mongodb.net/login?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const mongodb = require('mongodb');


//Get
router.get('/', async (req, res)=>{
    
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("login").collection("login");
    res.send(collection.find({}).toArray());
    client.close();
    });

    
});


//Add
router.post('/', (req, res)=>{
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("login").collection("login");
    collection.insertOne({
        text: req.body.text,
        createAt: new Date()
    });
    res.status(201).send();
    client.close();
    });
});


//Delete
router.delete(":id", (req, res)=>{
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
    const collection = client.db("login").collection("login");
    collection.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
    client.close();
});

});


async function loadPostsCollection(){/*
    var collection;
    const client = mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
    collection = client.db("login").collection("login");
    
    })
    return collection;*/
    
}

module.exports = router;