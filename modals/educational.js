const mongoose = require('mongoose');

const educationalSchema = new mongoose.Schema({
    typeofhelp:{type:String},
    typeofeducation:{type:String},
    institutename:{type:String},
    expectedhelp:{type:Number},
    expectedhelp:{type:Number},
    explainindetail:{type:String},
    img:{data:Buffer,
        contentType:String
    }

})

module.exports = mongoose.model('educational', educationalSchema)