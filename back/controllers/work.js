const {Router, raw} = require('express');
const {work} = require('../models')
const router = Router();


//получение всех работ
router.get('/work', async (req, res) => {
    try {
        work.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск работы по id
router.get('/work/:id', async (req, res) => {
    try {
        const id = req.params.id
        work.findOne({ where: { id }})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретной работы по id
router.delete('/work/:id', async (req, res) => {
    try {
        const id = req.params.id
        work.destroy({
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


//добавление работ
router.post('/work/create', async(req, res) => {
    try {
        const data = req.body
        work.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


//редактирование работ
router.put('/work/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        work.findOne({ where: { id }})
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