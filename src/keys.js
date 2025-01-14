module.exports = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '1234',
        port: process.env.DB_PORT || 3306, 
        database: process.env.DB_NAME || 'Ae'
    }
}