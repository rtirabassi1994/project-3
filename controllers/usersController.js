const db = require("../models");

// Defining methods for the booksController
module.exports = {
    create: function(req, res) {
        // console.log(req)
        console.log(req.body)
        console.log("-------------------LINE 7--------------------");
        db.User.create(req.body).then((response) => {
            // res.json(response);
            console.log(response);
            console.log("This is the end, it worked!!!!!");
            // console.log(req);
            res.json(response);
        })
    },

      findUser: async function(req, res) {
          // console.log("THIS IS TOP OF REQ.PARAMS");
          
          console.log("THIS IS BOTTOM OF REQ.PARAMS IN USERS CONTROLLER");
          console.log(req.user);
          db.User.find({userName: req.user.userName})
          .then(async (dbModel) => {
             console.log(dbModel);
             console.log("hello")
              res.json(dbModel);
          })
          .catch(err => res.status(422).json(err));
          
          
        //   .catch((err) => {
        //       console.log(err);
        //   })
      },

      delete: async function(req,res) {
          console.log(req.body)
          db.User.deleteOne({userName: req.body.userName})
          .then(async (res) => {
              console.log(res);
              console.log("THIS IS THE RESPONSE OF THE DATABASE AFTER DELETE");
              res.json(res);
          }).catch((err) => {
              console.log(err);
          })
        //   console.log("THIS IS THE DELETE FUNCTION IN THE CONTROLLER FILE")
      }
    
};
