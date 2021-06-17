const {Router} = require('express');
const {feedback} = require('../models')
const router = Router();

//получение всех обратной связи
router.get('/feedback', async (req, res) => {
    try {
        feedback.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//поиск обратной связи по id
router.get('/feedback/:id', async (req, res) => {
    try {
        const id = req.params.id
        feedback.findOne({ where: {id}})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});


//удаление конкретной обратной связи по id
router.delete('/feedback/:id', async (req, res) => {
    try {
        const id = req.params.id
        await feedback.destroy({
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


//добавление обратной связи
router.post('/feedback/create', async(req, res) => {
    try {
        const data = req.body
        feedback.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})


module.exports = router;