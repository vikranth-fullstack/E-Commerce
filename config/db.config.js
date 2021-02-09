var mongoose= require('mongoose');

exports.connect=() => {

    //url:  mongodb+srv://sai:<password>@ecommerce.obdec.mongodb.net/<dbname>?retryWrites=true&w=majority

    mongoose.connect('mongodb+srv://sai:sai@ecommerce.obdec.mongodb.net/7amecommerce?retryWrites=true&w=majority',{ useUnifiedTopology: true, useNewUrlParser: true },(err)=>{
        if(err){
            console.log(err);
        }
        else
        {
            console.log("connected to database");
        }
    })
}