const {Router} = require('express')
const config = require('config')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const{check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()
 
// /api/auth
router.post(
    '/register', 
    [
        check('email', 'Неккоректный email').isEmail(),
        check('password', 'Мин длина пароля 6 симв').isLength({min:6})
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()){
            return res.status(400).json({
                message: 'Неккоректные данные'
            })
        }
        const{email, password} = req.body

        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже сущ'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({ email, hashPassword })

        await user.save()

        res.status(201).json({ message: 'Пользователь создан' })

    } catch (e){
        res.status(500).json({message: 'Что-то пошло не так..'})
    }
})

// /api/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) =>{
    try{
        const errors = validationResult(req)
    
        if(!errors.isEmpty()){
            return res.status(400).json({
                    message: 'Неккоректные данные'
            })
        }
        
        const {email, password} = req.body

        const user = await findOne({ email })
        if (!user) {
            return res.status(400).json({ message:'Пользователь не найден'})
        }
    
            const isMatch = await bcrypt.compare(password, user.password)

            if(!isMatch) {
                return res.status(400).json({ message: 'Что-то пошло не так'})
            }
            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h'}
            )
            res.json({ token, userId: user.id})

    } catch (e){
        res.status(500).json({message: 'Что-то пошло не так..'})
    }
})

module.exports = router