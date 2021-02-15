var JWT= require('jsonwebtoken');

var UserModel = require('../models/user.model');
var Config= require('../config/app.config');

exports.registerUser=(request,response) => {

      console.log(request.body);
      var userData= request.body;
      var UserCollection= new UserModel(userData);
      UserCollection.save(function(err, doc){
          if(err){
              response.send({result:err.message})
          }
          if(doc._id){
              var payload={id:doc._id};
              var token=JWT.sign(payload,Config.config.JWT_SECRET)
            response.send({result:"success", token:token});   
          }
      })

}
exports.loginUser=(request,response) => {

    UserModel.findOne({'username':request.body.username,'password':request.body.password}).then((user)=>{
        if(user){
            console.log(user);
            var payload={id:user._id,email:user.emailId};
            var token=JWT.sign(payload,Config.config.JWT_SECRET)
            response.send({result:"success",token:token});  
        }
        else{
            response.send({result:"invalid user details"});  
        }
    },(error)=>{
        console.log(error);
        response.send({result:"Failure"});   
    });
    
}