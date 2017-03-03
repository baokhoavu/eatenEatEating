var mongoose = require('mongoose');

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/eat-eaten-eating'

mongoose.connect(url);

module.exports = mongoose;
