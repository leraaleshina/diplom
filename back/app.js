const express = require('express')
const config = require('config')
const sequelize = require('./db/db');
const app = express()
const models = require('./models')

const PORT = config.get('port') || 5000
app.use(express.json());
app.use('/api/auth', require('./routes/auth.routes'))
async function start() {
    try{   
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('App has been started on port ${PORT}...'))
    } catch(e) {
        console.log(e)
        process.exit(1)
    }
}
start()
