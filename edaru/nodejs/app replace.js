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
        if (!doc.strArea.match(/кухня/) && doc.strArea !== '') {
            collection.updateOne({'strMeal': doc.strMeal}, { $set: {'strSubCategory': doc.strArea, 'strArea': '',}}, 
        function(err, result){                  
            console.log(result);
            client.close();
        })
    }
        // console.log(doc)
        // console.log(i)
        // const strMeal = doc.strCategory;
        // newData = { '_id': doc._id, 'strIngredient': ingr, 'strCategory': '', 'intStorePeriodDays': 10 }
    }))


    i = 0;
    // await (areas.forEach((area) => {
        // console.log(area)
        
        // console.log(doc)
        // const strMeal = doc.strCategory;
        // newData = { '_id': doc._id, 'strIngredient': ingr, 'strCategory': '', 'intStorePeriodDays': 10 }
    // }))
    // console.log(mapOthers);
    // console.log(i)
    // arr.strAreas = mapAreas;
    
    // overview.insertOne(arr, function(err, results){
    //     if(err) return console.log(err);
    //     console.log(results);
    //     client.close();
    // });

// const listCategories = async () => {
// const collection = await getCollection();

//   const list = collection.find({}).toArray();
//   let categories = [];
//   let mapCategories = new Map();
//   (await list).forEach((el) => {
//     categories.push(el.strCategory)
//     // if (el.strCategory in categories) categories[el.strCategory] = {"intCount": Number(categories[el.strCategory]) + 1};
//     // categories[el.strCategory] = {"intCount": 1};
//   });
//   (await categories).forEach((el) => {
//     if (mapCategories.get(el) === undefined) mapCategories.set(el, 1);
//     else {
//       const n = mapCategories.get(el) + 1;
//       mapCategories.set(el, n);
//       }
//   })  

    // collection.updateMany(result)
    client.close();

});