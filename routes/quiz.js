var express = require('express');
var router = express.Router();
var passport = require('passport');

const app = express();

var quizzesController = require('../controllers/quizzesController');