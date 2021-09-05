const express= require('express')
const router =express.Router()

const controller = require('../controller/controller.js')

// router.get('/',(req,res)=>{
//         res.send('asd')
//     })
router.get('/',controller.index)



module.exports = router;