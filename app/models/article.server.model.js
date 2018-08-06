const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        default: '',
        required: 'Title can not be blank',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    comments: [{ body: String, dtae: Date }]
});

mongoose.model('Article', ArticleSchema);