const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("receipts"));
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
    // doc.strCategory,
    // doc.strSubCategory,
    // doc.strArea,
    // doc.strTags    
    // const regEx = /Сбитень|Квас|Морс|Кисель|Сангрия|Коктейл|Глинтвейн/;
    const regEx = /Панкейк|панкейк|Круассан|круассан|пасха|Пасха|зефир|Зефир|Пончики|пончики|Пряники|пряники|Ватрушк|ватрушк|Бублик/;
        if (doc.strMeal.match(/&#8230;/)) {
       
            n++;

            strMeal = doc.strMeal.replace('&#8230;' ,'');
            // strArea = doc.strArea;

            category.push([doc.strMeal, strMeal]);
            const newValue = {$set: { strMeal: strMeal }};
            // collection.updateOne({idMeal: doc.idMeal}, newValue, function(err, result) { if (err) throw err; console.log("updated", n)});
    }
    
    });
    // console.log(doc, doc.length, subCategory, i)
    const newSet = new Set(category);
    console.log(category, n)

    // console.log(mapCategories);
    // console.log(mapOthers);
    // console.log(i)
    subCategory.str = category;
    arr.str = subCategory;

    // client.close();

})
