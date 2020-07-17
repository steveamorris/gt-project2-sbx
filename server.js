const express = require("express");
const exphbs = require("express-handlebars");
//Define variables
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

db.sequelize
    .sync()
    .then(() => {
        app.listen(PORT, function () {
            // Log (server-side) when our server has started
            console.log(`Server listening on: http://localhost:${PORT}`);
        });
    
    }).catch(err => {
        console.log("error connecting to the db")
        console.log(err)
    });