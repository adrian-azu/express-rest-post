const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts.js');
const bodyParser = require('body-parser')
const compression = require('compression')
require('dotenv/config');
//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=>console.log("DB Connected"));
//How to start server
const PORT = process.env.PORT ?? 3000;
app.listen(PORT);
app.use(compression());
//Middlewares
app.use(bodyParser.json())
app.use('/posts', postsRoutes)