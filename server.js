const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./Develop/public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout_DB", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

//require routes

require("./Develop/routes/htmlroutes")(app);
require("./Develop/routes/apiroutes")(app);

//port

app.listen(PORT, () => {
  console.log(`App running on localhost port : ${PORT}`);
});
