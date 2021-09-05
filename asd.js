const experss=require('express')
const path = require('path')
const app= experss()
const router = require('./router/router.js')

// app.use('/',(req,res)=>{
//     res.send('asd')
// })
//router0
app.use(router)



app.listen(5500,()=>{
    console.log('打野来了')
})












