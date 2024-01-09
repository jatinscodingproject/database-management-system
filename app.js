const express = require('express');

const app = express();

const bodyparser = require('body-parser');

const create_table_routes = require('./routes/create_table');

const db = require('./util/database');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(create_table_routes);

app.listen(8000);