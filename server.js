import express from 'express'
import router from './routes/route.js'
import logger from './middleware/middleware.js'
const app = express()
app.use(express.json())
app.use(logger)

app.use(router)

const port = 3000
app.listen(port, ()=>{
    console.log('Server has started on port',port)
})