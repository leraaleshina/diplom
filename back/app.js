const express = require('express')
const config = require('config')
const sequelize = require('./db/db')
const app = express()
const auth = require('./controllers/auth.routes')
const kat = require('./controllers/kat')
const PORT = config.get('port') || 5000
const models = require('./models')
app.use(express.json());
app.use('/api/auth', auth)
app.use('/api', kat)
async function start() {
    try{   
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch(e) {
        console.log(e)
        process.exit(1)
    }
}
start()
