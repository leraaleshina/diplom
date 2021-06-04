const express = require('express')
const config = require('config')
const sequelize = require('./db/db')
const app = express()
const auth = require('./controllers/auth.routes')
const kat = require('./controllers/kat')
const podkat = require('./controllers/podkat')
const product = require('./controllers/product')
const service = require('./controllers/service')
const brand = require('./controllers/brand')
const sotrud = require('./controllers/sotrud')
const work = require('./controllers/work')
const stock = require('./controllers/stock')
const PORT = config.get('port') || 5000
const models = require('./models')
app.use(express.json());
app.use('/api/auth', auth)
app.use('/api', kat)
app.use('/api', product)
app.use('/api', service)
app.use('/api', brand)
app.use('/api', sotrud)
app.use('/api', stock)
app.use('/api', podkat)
app.use('/api', work)
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
