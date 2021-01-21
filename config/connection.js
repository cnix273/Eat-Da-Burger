// Dependencies
const mysql = require("mysql");
const exphbs = require("express-handlebars");

//Create an instance of the express app
const app = express();

// Setting the port of our application using Heroku
const PORT = process.env.PORT || 8080;

// Declating handlebars as the default templating engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(err => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
