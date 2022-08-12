if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env' })   
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts")
const mongoose = require('mongoose')

const indexRouter = require("./routes")

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL,() => console.log('connedted'), e => console.error(e));

app.use("/", indexRouter)

app.listen(process.env.PORT || 3000)