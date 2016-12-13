/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();
var task = require('../controllers/task');
var feedback = require('../controllers/feedback');
var notice = require('../controllers/notice');
var taskCategory = require('../controllers/task_category');
var user = require('../controllers/user');

/*task list*/
router.get('/task/list', task.list);

/*task one*/
router.get('/task/one', function(req, res, next) {

});
/*task mod*/
router.post('/task/mod', function(req, res, next) {

});
/*task add*/
router.post('/task/add', function(req, res, next) {

})

module.exports = router;