const express = require('express');

module.exports = function(app, db) {
var dataList = require('../controllers/dataController');

app.route('/create/:Id')
    .post(dataList.create);

app.route('/readAll')
    .get(dataList.list_all);

app.route('/read/:Id')
    .get(dataList.read);

app.route('/update/:Id')
    .put(dataList.update);

app.route('/delete/:Id')
    .delete(dataList.delete);
}
