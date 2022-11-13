import express from 'express'
import router from './routing.js'
import bodyParser from 'body-parser'
//const session = require('express-session')
const app = express()
//app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

//app.use(express.static(__dirname + '/static'))

// app.use(session({
//     secret: 'soverysecurecookie',
//     resave: 'false',
//     saveUninitialized: 'false'
// }))

router(app)

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

const server = app.listen(3000, function () {
    console.log("On: 3000")
})