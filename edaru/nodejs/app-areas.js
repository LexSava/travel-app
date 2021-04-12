const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("receipts"));
    let overview = await(db.collection("overview"));
    let mapAreas = new Map();
    let mapOthers = new Map();
    let arr = {};

    if (err) return console.log(err);
    let areas = []
    let i = 0;
    await (collection.find({}).forEach((doc) => {
        i++;
        areas.push(doc.strArea)
    }))
    i = 0;
    await (areas.forEach((area) => {
        // console.log(area)
        if (area.match(/кухня/) || area == 'none') {
        if (mapAreas.get(area)) mapAreas.set(area, mapAreas.get(area) + 1);
        else {mapAreas.set(area,1)}
        } else {
            i++
            if (mapOthers.get(area)) mapOthers.set(area, mapOthers.get(area) + 1);
        else {mapOthers.set(area,1)}
        }
    }))
    console.log(mapAreas);
    console.log(mapOthers);
    console.log(i)
    arr.strAreas = mapAreas;
    
    overview.insertOne(arr, function(err, results){
        if(err) return console.log(err);
        console.log(results);
        client.close();
     });

    client.close();

});