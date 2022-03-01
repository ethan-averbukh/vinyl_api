const {connection, mongoose} = require('../db/connection.js');

const Schema = mongoose.Schema;

const vinylsSchema = new Schema({
    artists: String,
    album: String
});

module.exports = connection.model('Vinyl', vinylsSchema);