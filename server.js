'use strict'

require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('./pages/index')
})

app.listen(PORT, () => console.log(`We're live on port ${PORT} BB ^ o ^`));