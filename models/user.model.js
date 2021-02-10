var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var UserSchema = new Schema(
    {
        username: {
            type: String,
            required:true
        },
        password: {
            type:String,
            required:true
        },
        emailId: {
            type:String,
            require:true,
            index:true
        }
    }
);

module.exports=mongoose.model('user',UserSchema);