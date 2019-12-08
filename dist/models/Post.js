'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Post = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create instance Schema from 'mongoose'
var PostSchema = new _mongoose.Schema({
    title: String,
    text: String
}, {
    timestamp: true // added data to posts
});

// PostModel Object
var Post = exports.Post = _mongoose2.default.model('Post', PostSchema);

exports.default = Post;