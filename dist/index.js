'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create instance
var Post = new _PostController2.default();

var app = (0, _express2.default)();
// connect to localhost:27017/postsDB
_mongoose2.default.connect('mongodb://localhost:27017/blogDB', { useNewUrlParser: true });

// bodyParser post require and received all data
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

// get, post, delete, put handlers
app.get('/posts', Post.index);
app.post('/posts', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(3000, function () {
  return console.log('3000 port is listening...');
});