const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("receipts"));
    let mapCategories = new Map();

    if (err) return console.log(err);
    let categories = []
    let i = 0;
    await (collection.find({}).forEach((doc) => {
        i++;
        // console.log(doc)
        const strMeal = doc.strMeal;
        // newData = { '_id': doc._id, 'strIngredient': ingr, 'strCategory': '', 'intStorePeriodDays': 10 }
        categories.push(strMeal)
    }))
    

    console.log(mapCategories);


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