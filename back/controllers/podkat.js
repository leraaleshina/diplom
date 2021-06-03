const {Router} = require('express');
const {podkat_devices} = require('../models')
const router = Router();


//получение всех подкатегорий
router.get('/podkategoriya', async (req, res) => {
    try {
        const podkat = await podkat_devices.findAll()
        res.status(200).json(podkat)
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск подкатегории по id
router.get('/podkategoriya/:id', async (req, res) => {
    try {
        const id = req.params.id
        const podkat = podkat_devices.findOne({ where: { id: id }})
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
        await podkat_devices.destroy({
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
        podkat_devices.create(data)
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
        let podkat = await podkat_devices.findOne({ where: { id: id }})

        podkat.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;