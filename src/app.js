const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const env = require("./utill/env");
const db = require("./models");
const errorHandler = require("./middlewares/error-handler.middleware");

const corsOptions = {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

app.use(errorHandler);

db.sequelize
    .sync({ force: false })
    .then(() => {
        console.log("🚀 Synced db");
    })
    .catch((err) => {
        console.error("Failed to sync db: " + err.message);
    });

app.listen(env.app.port, () => {
    console.log(`🚀 App running on port ${env.app.port}`);
    console.log(`🚀 Running in ${env.app.enviroment}`);
});
