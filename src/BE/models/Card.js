const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const cardSchema = new Schema({
    id: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    }

});


cardSchema.indexes();

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
