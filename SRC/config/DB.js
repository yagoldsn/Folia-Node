const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const banco = mongoose.connect('mongodb+srv://yago:mulnbo182@cluster0.im5jtw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/folia');

module.exports =  banco;