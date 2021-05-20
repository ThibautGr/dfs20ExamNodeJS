const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const projectRoutes = require("./routes/projectRoutes");
const userStoryRoutes = require("./routes/userStoryRoutes");
const bugRoutes = require("./routes/bugRoutes");

const app = express();

const dbUri = "mongodb://localhost:27017/projectManagement";

mongoose.connect(dbUri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(4000))
    .catch(err => console.log(err));

app.use(express.static("public"));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
    response.redirect("projects");
});

app.use("/projects", projectRoutes);
app.use("/userStories", userStoryRoutes);
app.use("/bugs", bugRoutes);