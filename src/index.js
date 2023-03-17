const express = require('express')
const connect=require('./config/database')
const Tweet=require('./models/tweet.js')

const app = express()



app.listen(3000, async() => {
    console.log(`Server is Listening on 3000`)
await connect()
console.log('MOngo db connected')
// const tweets=await Tweet.create({
//     content:"mukul"
// })
// console.log(tweets)
})

