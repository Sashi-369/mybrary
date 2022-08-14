if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env' })   
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const indexRouter = require("./routes/index")
const authorsRouter = require('./routes/authors')

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false}))

mongoose.connect(process.env.DATABASE_URL,() => console.log('connedted'), e => console.error(e));

app.use("/", indexRouter)
app.use("/authors", authorsRouter)

app.listen(process.env.PORT || 3000)