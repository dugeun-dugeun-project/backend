import env from '../utill/env' ;

export const development = {
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

export const production = {
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

