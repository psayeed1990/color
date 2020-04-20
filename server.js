const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require("express-ejs-layouts");
const app = express();

//link to routes
const colorPaletteIndex = require("./api/routes/index");
const feed = require("./api/routes/feed");
const dashboard = require("./api/routes/dashboard");

//set express ejs view
app.use(expressLayout);
app.set("view engine", "ejs");

//set static public folder
app.use(express.static(__dirname + "/public"));

//db config
const db = require("./config/keys").mongoURI;
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("mongodb conencted"))
    .catch((err) => console.log(err));

//routes
app.use("/", colorPaletteIndex);
app.use("/feed", feed);
app.use("/dashboard", dashboard);

//PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Palete app running at port ${PORT}`));
