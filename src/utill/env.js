require("dotenv").config({
    path: `env/.env.${process.env.NODE_ENV || "development"}`,
});

const env = {
    app: {
        port: parseInt(process.env.PORT) || 3000,
        enviroment: process.env.NODE_ENV || "development",
    },
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
    },
    auth: {
        jwtAccessSecret: process.env.JWT_SECRET_ACCESS,
        jwtRefreshSecret: process.env.JWT_SECRET_REFRESH,
    },
};

module.exports = env;
