const {Router} = require('express');
const {application} = require('../models')
const router = Router();


//получение всех 
router.get('/application', async (req, res) => {
    try {
        application.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});
//добавление 
router.post('/application/create', async(req, res) => {
    try {
        const data = req.body
        application.create(data)
        .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (error) {
        res.status(500).json({message: 'Что-то пошло не так...' + error});
    }
})

router.delete('/application/:id', async (req, res) => {
    try {
        const id = req.params.id
        await application.destroy({
            where: {id}
          })
          .then(result => res.status(200).json(result))
          .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});

module.exports = router;