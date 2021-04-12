const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("ingredients"));
    let mapCategories = new Map();
    let mapOthers = new Map();
    let arr = {};

    if (err) return console.log(err);
    let category = [];
    let subCategory = {};
    let i = 0;

    // const reg = ["Мясные продукты", /Мясо|мясн|Курин|курин|Свин|свин|Говяд|говяд|Телят|телят|Колбас|колбас|сосиск|Сосис|Сардел|сардел|Фарш|фарш|Буженина|буженина/, /Фарширов|фарширов|Соев|соев|Бульон|бульон/];
    // const reg = ["Молочные продукты", /Молок|молок|Творо|творо|Кефир|кефир|Сливк|сливк|Масло сл|Сливосное масло|Ряженка|ряженкка|Йогурт|йогурт/, /Растит|растит|Соев|соев/];
    // const reg = /Сыр|сыр/;
    // const ex = /Сырный|сырный/;
    // const reg = ["Алкоголь", /Вино|вино|Виски|виски|Водка|водка|Ликер|ликер|Бренди|бренди/, /виногра|Виногра/];
    // const reg = ["Алкоголь", /Вино|вино|Виски|виски|Водка|водка|Ликер|ликер|Бренди|бренди/, /виногра|Виногра/];
    // const reg = ["Хлеб", /Хлеб|хлеб|Бисквит|бисквит|Батон|батон|Багет|багет|Булоч|булоч|Лаваш|лаваш/, /0/];
    const reg = [" ", /\W/, /0/];

    await (collection.find({}).forEach((doc) => {
        // if (doc.strCategory === 'Пошаговые рецепты') {
        // const eal = doc.strMeal.replace('&#8230;', '')

// strIngredient: "Арахисовое масло"
// strCategory: ""
// intStorePeriodDays: 10
// intStoreTempMax: null
// intStoreTempMin: null

            if (doc.strCategory === ""  && doc.strIngredient.match(reg[1]) && !doc.strIngredient.match(reg[2])) {
            i++
            const newIngr = doc.strIngredient.replace('%-', ' процент')
            
            // category.push(doc.strIngredient, doc.strCategory, doc.intStoreTempMax, doc.intStoreTempMin, doc.intStorePeriodDays);
            category.push(doc.strIngredient);

            // collection.updateOne({ strIngredient: doc.strIngredient }, { $set: { strCategory : reg[0] , intStorePeriodDays: 5, intStoreTempMax: 6, intStoreTempMin: 2} }, function(err, result) {  });

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
