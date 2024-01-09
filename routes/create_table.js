const express = require('express');

const router = express.Router();

const create_table_controller = require('../controllers/create_table')

router.get('/',create_table_controller.getcreateTable);

router.post('/',create_table_controller.postCreatetable)

router.get('/create_table',create_table_controller.getcreate_Table);

router.post('/create_table',create_table_controller.postcreate_table);

module.exports = router;