const {Router} = require('express');
const {sotrud} = require('../models')
const router = Router();


//получение всех сотрудников
router.get('/sotrud', async (req, res) => {
    try {
        sotrud.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск сотрудника по id
router.get('/sotrud/:id', async (req, res) => {
    try {
        const id = req.params.id
        sotrud.findOne({ where: { id}})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретного сотрудника по id
router.delete('/sotrud/:id', async (req, res) => {
    try {
        const id = req.params.id
        sotrud.destroy({
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


//добавление сотрудника
router.post('/sotrud/create', async(req, res) => {
    try {
        const data = req.body
        sotrud.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


//редактирование сотрудников
router.put('/sotrud/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        sotrud.findOne({ where: { id }})
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