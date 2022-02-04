const express = require('express');
const bodyParser = require('body-parser');
const classeRoute = require("./src/Routes/ClasseRoute");
const matiereRoute = require("./src/Routes/MatiereRoute");
const etudiantRoute = require("./src/Routes/EtudiantRoute");
const questionRoute = require("./src/Routes/questionRoute");
const typeRoute = require("./src/Routes/TypeRoute");
const testRoute = require("./src/Routes/testRoute");
const reponseRoute = require("./src/Routes/reponseRoute");
var dbConn= require('./Config/db')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
var cors = require('cors')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route

app.use(express.json())
app.use(cors({origin:"http://localhost:4200"}));


app.use("/Classes/api",classeRoute);
app.use("/Matieres/api",matiereRoute);
app.use("/Etudiants/api",etudiantRoute);
app.use("/Questions/api",questionRoute);
app.use("/Types/api",typeRoute)
app.use("/Tests/api",testRoute);
app.use("/Reponse/api",reponseRoute);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});