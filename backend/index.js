var express = require("express");
var cors = require("cors");
const sessions = require('express-session');

var bodyParser = require("body-parser");
var app = express();
const mysql = require("mysql");
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

const connect = mysql.createConnection({
  host: "localhost",
  user: "root",
  pasword: "",
  database: "todoapp",
});

connect.connect((error) => {
  if (error) {
    console.log("error");
  } else console.log("connected");
});

app.use(cors());


var session;
var port = process.env.PORT || 5000;

app.use(bodyParser.json());



app.get("/getData", (req, res) => {
  res.json({
    statuscode: 399,
  });
});

app.post("/login", (req, res) => {
  
  const user = req.body.user;

  const sqlData =
    'select * from userregister where  email = ("' + user.email + '") and password = ("' + user.password + '") ';
  connect.query(sqlData, (err, result) => {
    if (err) throw err;
    else if (result && result.length) {
      session=req.session;
      session.userid=req.body.username;
      console.log(req.session);
      res.json({"statuscode":200
    });
    } else {
        res.json({"statuscode":401});
      
    }
  });
});

// Route for register a user
app.post("/register", (req, res) => {
  const user = req.body.user;
  const checker = false;

  const sqlData =
    'select email from userregister where  email = ("' + user.email + '")';
  connect.query(sqlData, (err, result) => {
    console.log(result.length);
    if (err) throw err;
    if (result.length) {
       
       return res.json({ statuscode: 399 });
    } else {
         res.json({ statuscode: 200 });
         const data =
         " INSERT INTO userregister values ( '" +
         user.Name +
         "', '" +
         user.email +
         "','" +
         user.password +
         "' )";
       connect.query(data, (err, res) => {
         if (err) return console.log("errors");
         console.log("inserted " + res.affectedRows);
       });

    }
  });
  
 
});


// route for logout
// app.get("/logout", (req, res) => {
//   req.session.destroy(function (err) {
//     if (err) {
//       console.log(err);
//       res.send("Error");
//     } else {
//       res.render("base", {
//         title: "Express",
//         logout: "logout Successfully...!",
//       });
//     }
//   });
// });

app.listen(port, () => console.log("listen to post no " + port));
