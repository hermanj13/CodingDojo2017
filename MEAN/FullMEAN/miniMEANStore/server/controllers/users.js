var mongoose = require('mongoose');
var User = mongoose.model('User')
function UsersController(){
  this.create = function(req,res){
    console.log("we are inside our backend users controller")
    console.log(req.body)
    var user = new User(req.body)
    user.save(function(err, user){
      console.log("saved user, sending a json response", {err:err, user:user})
      res.json({err:err, user:user})
    })
  };
}
module.exports = new UsersController();