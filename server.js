const express = require("express");
const app = express();

//link to routes
const colorPaletteIndex = require("./api/routes/index");
const feed = require("./api/routes/feed");
const dashboard = require("./api/routes/dashboard");

//routes
app.use("/", colorPaletteIndex);
app.use("/feed", feed);
app.use("/dashboard", dashboard);

//PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Palete app running at port ${PORT}`));
