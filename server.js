const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRoutes");
const sequelize = require("./assets/DB/database");

const app = express();

app.set('view engine', 'ejs');
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(userRouter);

sequelize.sync({alter: true})
.then(() => {
    app.listen(3131, () => {
        console.log("Server is running on port 3131");
    });
})
.catch((error) => {
    console.error("", error);
});
