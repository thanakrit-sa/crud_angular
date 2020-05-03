const mongoose = require('mongoose')

var table_register = mongoose.Schema({
    firstname: {type:String,require:true},
    lastname: {type:String,require:true},
    username: {type:String,require:true},
    password: {type:String,require:true},
    repassword: {type:String,require:true},
    email: {type:String,require:true}
})

var schemaModel = mongoose.model('feedbacks',table_register)
module.exports = schemaModel;
