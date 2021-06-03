const {Router} = require('express');
const {product} = require('../models')
const router = Router();


//получение всех продуктов
router.get('/product', async (req, res) => {
    try {
        product.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});

//поиск продуктков по id
router.get('/product/:id', async (req, res) => {
    try {
        const id = req.params.id
        const product = product.findOne({ where: { id: id }})
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e.message});
    }
});


//удаление конкретного продукта по id
router.delete('/product/:id', async (req, res) => {
    try {
        const id = req.params.id
        await product.destroy({
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


//добавление продукта
router.post('/product/create', async(req, res) => {
    try {
        const data = req.body
        product.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error.message});
    }
})


//редактирование продукта
router.put('/product/update/:id', async(req, res) => {
    try {
        const update = req.body
        const id = req.params.id
        let product = await product.findOne({ where: { id }})

        product.update(update)
            .then(result => res.status(200).json(result))
            .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
        throw Error(error)
    }
})
module.exports = router;