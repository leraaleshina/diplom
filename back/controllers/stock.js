const {Router, raw} = require('express');
const {stock} = require('../models')
const router = Router();


//получение всех акций
router.get('/stock', async (req, res) => {
    try {
        stock.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск акции по id
router.get('/stock/:id', async (req, res) => {
    try {
        const id = req.params.id
        stock.findOne({ where: { id }})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретной акции по id
router.delete('/stock/:id', async (req, res) => {
    try {
        const id = req.params.id
        stock.destroy({
            where: {
              id
            }
          })
          .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//добавление акции
router.post('/stock/create', async(req, res) => {
    try {
        const data = req.body
        stock.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


//редактирование акции
router.put('/stock/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        stock.findOne({ where: { id }})
        .then(raw => {
            raw.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
        })
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;