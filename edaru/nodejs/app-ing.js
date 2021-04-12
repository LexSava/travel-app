const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://192.168.1.66:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

mongoClient.connect(async function(err, client) {
    const db = client.db("home-planner");
    let collection = await(db.collection("receipts"));
    let overview = await(db.collection("overview"));
    let mapCategories = new Map();
    let mapOthers = new Map();
    let arr = {};

    cas =   [ 'Белорусская кухня', /Белорус|белорус/ ];

    if (err) return console.log(err);
    let category = [];
    let subCategory = {};
    let n = 0;
    const arrr = [16921, 20811];
    const arrO = [{idMeal:"16921"}, {idMeal:"20811"}, {idMeal:"33068"}, {idMeal:"15715"}, {idMeal:"44065"}, {idMeal:"33013"}, {idMeal:"91464"}, {idMeal:"22388"}, {idMeal:"49038"}, {idMeal:"15694"}, {idMeal:"14970"}];
    const one = "16921";
    // const reg = /16921|20811|33068|15715|44065|33013|91464|22388|49038|15694|14970/;
    const obj = { el: 'strMeal', reg: '16921|20811|33068|15715|44065' }
    const el = obj["el"];
    const reg = new RegExp(obj["reg"]);

    const mapLuc = new Map([['1 кг', '1000 г'], ['0.5 кг', '500 г'], ['1,399 кг', '1400 г'], ['3 кг', '3000 г'],
    ['2 кг', '2000 г'], ['1,25 кг', '1500 г'], ['1,6 кг', '1600 г'], ['6 кг', '6000 г'],
    ['1,2 кг', '1200 г'], ['7 кг', '7000 г'], ['2,5 кг', '2500 г'], ['1,799', '1800 г'],  
    ['4 кг', '4000 г'], ['1,3 кг', '1300 г'], ['0,3 кг', '300 г'], ['1,5 кг', '1500 г'],
    ['2,4 кг', '2400 г'], ['1,299 кг', '1300 г'], ['1,1 кг', '1100 г']]);
    
    const mapNz = new Map([['Джин', 'Джин'], ['Чай', 'Чай'],
    ['Шоколад Bonajuto', 'Шоколад'], ['Желе для торта Dr.Oetker', 'Желе для торта'], 
    ['Желатин Dr.Oetker', 'Желатин'], ['Ванильный сахар Dr.Oetker', 'Ванильный сахар'], 
    ['Сыр моцарелла Unagrande', 'Сыр моцарелла'],
    ['Оливковое масло GAEA DOP Sitia, Crete extra virgin', 'Оливковое масло extra virgin'], ['Говяжий бульон Campbell\'s', 'Говяжий бульон'], 
    ['Ванильная сахарная пудра Dr.Oetker', 'Ванильная сахарная пудра'], ['Оливки без косточки GAEA Green Halkidiki', 'Оливки без косточки'], ['2,299 штуки', '250 г'], ['7 штук', '700 г'], ['1,1 кг', '1100 г']])
    // console.log({el, reg})
    // category.push(cas[0])
    // await (collection.find({ idMeal: {$all: arrr } }).forEach((doc) => {
    // const doc = await (collection.find({ idMeal: one })).toArray();
    // const doc = await (collection.find( { $or : [ { idMeal: arrr[0] }, { idMeal: arrr[2] } ] } )).toArray();
    let docs = await (collection.find({})).toArray();
    // const doc = await (collection.find( { idMeal: reg } )).toArray();
    docs.forEach ((doc, i) => {
        for (let i = 1 ; i < 25 ; i++ ) {
            const mea = 'strMeasure' + i;
            const ing = 'strIngredient' + i;
            const ingr = doc[ing];
            const meas = doc[mea];
            // const ingr = 'strIngredient1';
            // const mea = 'strMeasure1';
        if (ingr) {    
            const w = Number(meas.split(' ')[0])
        if (ingr.match(/./) 
        && meas.match(/банк/)
        && !ingr.match(/енхель/)
        // && !meas.match(/чайн ложк|стол ложк|по вкусу|щепотка|куск|мл|л/)
        ) {
            n++;

            let nw = meas;
                nw = String(Math.ceil(w * 200)) + ' г';
                // nw = '5 г'
            // const nw = meas.replace(/головки|головка/, 'шт')
            // nw = nw.replace(/голов/, 'г')
            if (ingr) {
            //  }
                // console.log(mapLuc.get(meas), meas)
                // console.log(typeof doc[ing])
            const value = nw;
            const newValue = {$set: { [mea]: value }};
            // const newValue = {$set: { [mea]: value, [ing]: 'Репчатый лук'}};
            // collection.updateOne({idMeal: doc.idMeal}, newValue, function(err, result) { if (err) throw err; console.log("updated", n)});
            category.push(ingr, meas, value);
            }
            }
        }
        }
        // const eal = doc.strMeal.replace('&#8230;', '')
        
            // if (doc.strMeal.match(/ырники|ахохбили/)) {
            // i++
            // const id = doc.strSource.slice(-5);
            // category.push(doc.strMeal);

            // collection.updateOne({ strMeal: doc.strMeal }, { $set: { idMeal : id } }, function(err, result) {  });
            // collection.remove({ _id: doc._id }, function(err, result) {  });
 })
    
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
