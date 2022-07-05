module.exports = {
    "development": {
        "username": "Kind",
        "password": "Onyedikachi$2000",
        "database": "devbook_dev",
        "host": "localhost",
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 30000,
            "idle": 10000
        }
    },

    "production": {
        "host": process.env.host,
        "username": process.env.username,
        "password": process.env.password,
        "database": process.env.database,
        "logging": false,
        "dialect": "mysql",
        "pool": {
            "max": 5,
            "min": 0,
            "acquire": 10000,
            "idle": 1000
        }
    }
}
