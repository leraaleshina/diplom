const {Router} = require('express');
const {kat_device} = require('../models')
const router = Router();


//получение всех категорий
router.get('/kategories', async (req, res) => {
    try {
        kat_device.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск категории по id
router.get('/kategorie/:id', async (req, res) => {
    try {
        const id = req.params.id
        kat_device.findOne({ where: { id}})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретной категории по id
router.delete('/kategorie/:id', async (req, res) => {
    try {
        const id = req.params.id
        await kat_device.destroy({
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


//добавление категории
router.post('/kategorie/create', async(req, res) => {
    try {
        const data = req.body
        kat_device.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


//редактирование категории
router.put('/kategorie/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        let kats = await kat_device.findOne({ where: {id}})

        kats.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;