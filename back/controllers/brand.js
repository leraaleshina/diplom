const {Router} = require('express');
const {brand} = require('../models')
const router = Router();


//получение всех брендов
router.get('/brand', async (req, res) => {
    try {
        brand.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});

//поиск брендов по id
router.get('/brand/:id', async (req, res) => {
    try {
        const id = req.params.id
        brand.findOne({ where: { id }})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e.message});
    }
});


//удаление конкретного бренда по id
router.delete('/brand/:id', async (req, res) => {
    try {
        const id = req.params.id
        brand.destroy({
            where: {
              id
            }
          })
          .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e.message});
    }
});


//добавление бренда
router.post('/brand/create', async(req, res) => {
    try {
        const data = req.body
        brand.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error.message});
    }
})


//редактирование бренда
router.put('/brand/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        let brand = await brand.findOne({ where: { id }})

        brand.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;