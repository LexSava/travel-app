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

    const are = [ [ 'Татарская кухня', /Татарск|татарск/ ],
  [ 'Индонезийская кухня', /Индонезийск|индонезийск/ ],
  [ 'Индонезийская кухня', /Индонезийск|индонезийск/ ],
  [ 'Корейская кухня', /Корейск|корейск/ ],
  [ 'Венгерская кухня', /Венгерск|венгерск/ ],
  [ 'Индийская кухня', /Индийск|индийск/ ],
  [ 'Британская кухня', /Британск|британск|Английск|английск/ ],
  [ 'Азербайджанская кухня', /Азербайдж|азербайдж/ ],
  [ 'Мексиканская кухня', /Мексиканск|мексиканск/ ],
  [ 'Еврейская кухня', /Еврейск|еврейск/ ],
  [ 'Арабская кухня', /Арабск|арабск/ ],
  [ 'Сирийская кухня', /Сирийск|сирийск/ ],
  [ 'Немецкая кухня', /Немецк|немецк/ ],
  [ 'Шведская кухня', /Шведск|шведск/ ],
  [ 'Голландская кухня', /Голландск|голландск/ ],
  [ 'Болгарская кухня', /Болгарск|болгарск/ ],
  [ 'Украинская кухня', /Украинск|украинск/ ],
  [ 'Югославская кухня', /Югославск|югославск/ ],
  [ 'Турецкая кухня', /Турецк|турецк/ ],
  [ 'Узбекская кухня', /Узбекск|узбекск/ ],
  [ 'Армянская кухня', /Армянск|армянск/ ],
  [ 'Китайская кухня', /Китай|китай/ ],
  [ 'Финская кухня', /Финск|финск/ ],
  [ 'Ирландская кухня', /Ирландск|ирландск/ ],
  [ 'Бразильская кухня', /Бразильск|бразильск/ ],
  [ 'Карибская кухня', /Карибск|карибск/ ],
  [ 'Шотландская кухня', /Шотландск|шотландск/ ],
  [ 'Австралийская кухня', /Австралийск|австралийск/ ],
  [ 'Датская кухня', /Датск|датск/ ],
  [ 'Эстонская кухня', /Эстонск|эстонск/ ],
  [ 'Чешская кухня', /Чешск|чешск/ ],
  [ 'Бельгийская кухня', /Бельгийск|бельгийск/ ],
  [ 'Молдавская кухня', /Молдавск|молдавск/ ],
  [ 'Польская кухня', /Польск|польск/ ],
  [ 'Абхазская кухня', /Абхазск|абхазск/ ],
  [ 'Норвежская кухня', /Норвежск|норвежск/ ],
  [ 'Таджикская кухня', /Тадж|тадж/ ],
  [ 'Латиноамериканская кухня', /Латиноам|латиноам/ ],
  [ 'Белорусская кухня', /Белорус|белорус/ ],
  [ 'Перуанская кухня', /Перуанск|перуанск/ ],
  [ 'Литовская кухня', /Литовск|литовск/ ],
  [ 'Киргизская кухня', /Киргизск|киргизск/ ],
  [ 'Аргентинская кухня', /Аргентинск|аргентинск/ ]];
    cas = are[ 41 ]

    if (err) return console.log(err);
    let category = [];
    let subCategory = {};
    let i = 0;


    category.push(cas[0])
    await (collection.find({}).forEach((doc) => {
        
        // if (doc.strCategory === 'Пошаговые рецепты') {
        // const eal = doc.strMeal.replace('&#8230;', '')
        
            if (doc.strMeal.match(cas[1])) {
            i++
            // category.push(doc.strMeal);
            category.push(doc.strArea + " " + doc.strMeal);

            collection.updateOne({ strMeal: doc.strMeal }, { $set: { strArea : cas[0] } }, function(err, result) {  });

            }
        // console.log(doc)
        // console.log(i)
        // const strMeal = doc.strCategory;
        // newData = { '_id': doc._id, 'strIngredient': ingr, 'strCategory': '', 'intStorePeriodDays': 10 }
    //     category.push(doc.strCategory);
    //     if (doc.strSubCategory) i++;
    //     subCategory[doc.strSubCategory] = (doc.strCategory);
    // }))
    
    // console.log(category, subCategory, i)

    // i = 0;
    // await (category.forEach((cat) => {
    //     // console.log(area)
    //     if (cat) {
    //     if (mapCategories.get(cat)) mapCategories.set(cat, mapCategories.get(cat) + 1);
    //     else {mapCategories.set(cat,1)}
    //     } else {
    //         i++
    //         if (mapOthers.get(cat)) mapOthers.set(cat, mapOthers.get(cat) + 1);
    //     else {mapOthers.set(cat,1)}
    //     }

        // console.log(doc)
        // const strMeal = doc.strCategory;
        // newData = { '_id': doc._id, 'strIngredient': ingr, 'strCategory': '', 'intStorePeriodDays': 10 }
 }))
    
    console.log(category, subCategory, i)

    // console.log(mapCategories);
    // console.log(mapOthers);
    // console.log(i)
    subCategory.str = category;
    arr.str = subCategory;
    
    //   collection.updateOne({ a : 2 }
    // , { $set: { b : 1 } }, function(err, result) {
    // assert.equal(err, null);
    // assert.equal(1, result.result.n);
    // console.log("Updated the document with the field a equal to 2");
    // callback(result);
    // });

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
})
