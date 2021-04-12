const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("rec"));
    let receip = await(db.collection("receip"));
    let overview = await(db.collection("overview"));
    let mapCategories = new Map();
    let mapOthers = new Map();
    let arr = {};

    if (err) return console.log(err);
    let category = [];
    let subCategory = {};
    let n = 0;
    
    let docs = await (collection.find({})).toArray();
        docs.forEach(doc => {
            newEl = {
    idMeal: doc.idMeal,
    strMeal: doc.strMeal,
    strDrinkAlternate: doc.strDrinkAlternate,
    strDescription: doc.strDescription,
    strCategory: doc.strCategory,
    strSubCategory: doc.strSubCategory,
    strArea: doc.strArea,
    strSource: doc.strSource,
    strForPersons: doc.strForPersons,
    strRequestsCounter: doc.strRequestsCounter,
    strInstructions: doc.strInstructions,
    strMealThumb: doc.strMealThumb,
    strTags: doc.strTags,
    strYoutube: doc.strYoutube,
    arrNutrition: doc.arrNutrition,
    strTimer: doc.strTimer
    };
    for (let i = 1 ; i < 25 ; i++ ) {
            const mea = 'strMeasure' + i;
            const ing = 'strIngredient' + i;
            const ingr = doc[ing];
            const meas = doc[mea];
        if (ingr) {    
            newEl[ing] = ingr;
            newEl[mea] = meas;
        } else { break }
        }
    
    receip.insertOne(newEl);
    
        });
        const value =  docs.idMeal;
        // const newValue = {$set: { [mea]: value }};
        // receip.updateOne({idMeal: doc.idMeal}, newValue, function(err, result) { if (err) throw err; console.log("updated", n)});
            category.push(docs, value);
    
    // console.log(doc, doc.length, subCategory, i)
    const newSet = new Set(category);
    console.log(newSet, newSet.size, n)

    // console.log(mapCategories);
    // console.log(mapOthers);
    // console.log(i)
    subCategory.str = category;
    arr.str = subCategory;

    // client.close();

})
