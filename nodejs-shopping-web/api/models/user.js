const mongoose = require('mongoose')
mongoose.connect('mongodb://db:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String, 
        required: true,
        unique: true,       // 不是唯一的作用，它不會幫我們驗證
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/                 
    },
    password: { type: String, required: true }
})

module.exports = mongoose.model('User', userSchema)