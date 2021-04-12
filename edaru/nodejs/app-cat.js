const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("receipts"));
    let overview = await(db.collection("overview"));
    let mapCategories = new Map();
    let mapOthers = new Map();
    let arr = {};

    if (err) return console.log(err);
    let Categories = []
    let i = 0;
    await (collection.find({}).forEach((doc) => {
        i++;
        Categories.push(doc.strCategory)
    }))
    i = 0;
    await (Categories.forEach((cat) => {
        // console.log(Category)
        if (mapCategories.get(cat)) mapCategories.set(cat, mapCategories.get(cat) + 1);
        else {mapCategories.set(cat,1)}
    }))
    console.log(mapCategories);
    console.log(mapOthers);
    console.log(i)
    arr.strCategories = mapCategories;
    
    overview.insertOne(arr, function(err, results){
        if(err) return console.log(err);
        console.log(results);
        client.close();
     });

    client.close();

});