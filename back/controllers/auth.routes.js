const {Router} = require('express')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const{check, validationResult} = require('express-validator')
const {client} = require('../models')
const router = Router()
 
// /api/auth
router.post(
    '/register', 
    [
        check('login_c', 'Неккоректный email').isEmail(),
        check('password_c', 'Мин длина пароля 6 симв').isLength({min:6}),
        check('name_c', 'Добавьте имя').notEmpty()
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)
        console.log(req.body);
        if(!errors.isEmpty()){
            return res.status(400).json({
                message: errors
            })
        }
        const{name_c, login_c, password_c} = req.body

        const candidate = await client.findOne({where: {login_c} })

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password_c, 5)

        client.create({name_c, login_c, password_c: hashedPassword})
        .then(result => res.status(201).json({message: 'Пользователь создан', id:result.id}))
        .catch(err => {throw Error(err)})

        console.log(hashedPassword);

    } catch (e){
        res.status(500).json({msg: e.message})
        throw e
    }
})


router.post(
    '/register_admin', 
    [
        check('password_c', 'Мин длина пароля 6 симв').isLength({min:6}),
        check('name_c', 'Добавьте имя').notEmpty()
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)
        console.log(req.body);
        if(!errors.isEmpty()){
            return res.status(400).json({
                message: errors
            })
        }
        const{name_c, role, password_c} = req.body

        const candidate = await client.findOne({where: {name_c, role} })

        if (candidate) {
            return res.status(400).json({ message: 'Такой администратор уже существует'})
        }

        const hashedPassword = await bcrypt.hash(password_c, 5)

        client.create({name_c, role: "admin", password_c: hashedPassword})
        .then(result => res.status(201).json({message: 'Админ создан', id:result.id}))
        .catch(err => {throw Error(err)})

        console.log(hashedPassword);

    } catch (e){
        res.status(500).json({msg: e.message})
        throw e
    }
})
 
router.get('/clients', async (req, res) => {
    try {
        client.findAll()
       .then(result => res.status(200).json(result))
       .catch(err => {throw Error(err)})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так...' + e});
    }
});
// /api/auth/login
router.post(
    '/login',
    [
        check('login_c', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password_c', 'Введите пароль').exists()
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)
    
        if(!errors.isEmpty()){
            return res.status(400).json({
                    message: 'Неккоректные данные'
            })
        }
        
        const {login_c, password_c} = req.body

        const user = await client.findOne({where: {login_c} })
        if (!user) {
            return res.status(400).json({ message:'Пользователь не найден'})
        }
        
        const isMatch = await bcrypt.compare(password_c, user.password_c)

        if(!isMatch) {
            return res.status(400).json({ message: 'Неправильный пароль, попробуйте снова'})
        }
        const token = jwt.sign(
            { userId: user.id ,
              role: user.role},
            config.get('jwtSecret'),
            { expiresIn: '7d' }
        )

        res.json( {user:{ token, userId: user.id, role: user.role}})

    } catch (e){
        res.status(500).json({message: 'Что-то пошло не так..'})
    }
})

module.exports = router