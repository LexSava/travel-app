var express = require('express')
var app = express()
// var bodyParser = require('body-parser');
var mongoose = require('mongoose')
 
// var fs = require('fs');
// var path = require('path');
require('dotenv/config');

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        console.log('connected')
    });

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
 
// Set EJS as templating engine
app.set("view engine", "ejs");

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const filename = (file.originalname).split('.');
        const ext = filename[filename.length - 1];

        cb(null, `${Date.now()}.${ext}`)
    }
});
 
var upload = multer({ storage: storage });

var imgModel = require('./model');

app.get('/', (req, res) => {
    imgModel.find({}, (err, items) => {
        if (err) {
            console.log(err);
            res.status(500).send('An error occurred', err);
        }
        else {
            res.render('imagesPage', { items: items });
        }
    });
});

// app.post('/', upload.single('image'), (req, res, next) => {

//     var obj = {
//         name: req.file.filename,
//         img: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         }
//     }
//     imgModel.create(obj, (err, item) => {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             item.save();
//             res.redirect('/');
//         }
//     });
// });

app.post("/avatars", upload.single('file'), function (req, res, next) {
 
    let filedata = req.file;
     if(!filedata){
        res.send("Ошибка при загрузке файла");
        } else
        res.send(req.file);
});

var port = process.env.PORT || '3003'
app.listen(port, err => {
    if (err)
        throw err
    console.log('Server listening on port', port)
})