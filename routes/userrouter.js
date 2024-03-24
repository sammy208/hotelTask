const router = require ("express").Router()
const {signUp, login}= require ('../controllers/userControllers.js')

router.post('/api/v1/signUp', signUp)
router.post('/api/v1/login', login)

module.exports = router;
