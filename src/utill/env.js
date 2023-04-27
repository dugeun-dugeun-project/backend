import dotenv from 'dotenv';
dotenv.config({
    path: `env/.env.${process.env.NODE_ENV || "development"}`,
});

function required(key, defaultValue = undefined){
    const value = process.env[key] || defaultValue;
    if(value == null) {
        throw new Error(`key ${key} is undefined`);
    }
    return value;
}

export const env = {
    app: {
        port: parseInt(required('PORT',3000)),
        enviroment: required('NODE_ENV','development'),
    },
    database: {
        host: required('DATABASE_HOST'),
        port: parseInt(required('DATABASE_PORT',3306)),
        username: required('DATABASE_USERNAME'),
        password: required('DATABASE_PASSWORD'),
        name: required('DATABASE_NAME'),
    },
    auth: {
        jwtAccessSecret: required('JWT_SECRET_ACCESS'),
        jwtRefreshSecret: required('JWT_SECRET_REFRESH'),
    },
};
