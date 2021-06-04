const {Router} = require('express');
const {service} = require('../models')
const router = Router();


//получение всех услуг
router.get('/service', async (req, res) => {
    try {
        service.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск услуги по id
router.get('/service/:id', async (req, res) => {
    try {
        const id = req.params.id
        const service = service.findOne({ where: { id }})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретной услуги по id
router.delete('/service/:id', async (req, res) => {
    try {
        const id = req.params.id
        await service.destroy({
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


//добавление услуги
router.post('/service/create', async(req, res) => {
    try {
        const data = req.body
        service.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


//редактирование услуги
router.put('/service/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        let service = await service.findOne({ where: { id }})

        service.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;