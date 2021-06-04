const {Router} = require('express');
const {podkat_device} = require('../models')
const router = Router();


//получение всех подкатегорий
router.get('/podkategoriya', async (req, res) => {
    try {
        podkat_device.findAll()
        .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск подкатегории по id
router.get('/podkategoriya/:id', async (req, res) => {
    try {
        const id = req.params.id
        podkat.findOne({ where: {id}})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретной подкатегории по id
router.delete('/podkategoriya/:id', async (req, res) => {
    try {
        const id = req.params.id
        await podkat.destroy({
            where: {
              id: id
            }
          })
          .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//добавление подкатегории
router.post('/podkategoriya/create', async(req, res) => {
    try {
        const data = req.body
        podkat.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


//редактирование подкатегории
router.put('/podkategoriya/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        let podkat = await podkat.findOne({ where: { id: id }})

        podkat.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;