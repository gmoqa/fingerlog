const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name : { type: String },
    lastName : { type: String },
    email : { type: String, lowercase: true },
    role : {type: String },
    created: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: Date.now }
});

const User = mongoose.model('User', schema);

module.exports = User;