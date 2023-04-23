const env = require("../utill/env");

const development = {
    username: env.database.username,
    password: env.database.password,
    database: env.database.name,
    host: env.database.host,
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
        charset: "utf8mb4",
        dateStrings: true,
        typeCast: true,
    },
};

const production = {
    username: env.database.username,
    password: env.database.password,
    database: env.database.name,
    host: env.database.host,
    dialect: "mysql",
    timezone: "+09:00",
    dialectOptions: {
        charset: "utf8mb4",
        dateStrings: true,
        typeCast: true,
    },
    logging: false,
};

module.exports = { development, production };
