const express = require('express');
const bodyParser = require('body-parser');
const classeRoute = require("./src/Routes/ClasseRoute");
const matiereRoute = require("./src/Routes/MatiereRoute");
const etudiantRoute = require("./src//Routes/EtudiantRoute");
const chapitreRoute = require("./src/Routes/ChapitreRoute");
const errorController = require('./src/Controllers/error');

var dbConn= require('./Config/db')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
var cors = require('cors')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route

app.use(express.json());
app.use(cors({origin:"http://localhost:4200"}));

app .use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST ,PUT , DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
  next();
  });


app.use("/Classes/api",classeRoute);
app.use("/Matieres/api",matiereRoute);
app.use("/Etudiants/api",etudiantRoute);
app.use("/Chapitres/api",chapitreRoute);
app.use(errorController.get404);
app.use(errorController.get500);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});