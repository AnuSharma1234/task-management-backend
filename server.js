import express from "express";
import dotenv from "dotenv";
import connectDb from "./db/connectDB";
import taskRouter from "./routes/task.route";

const app = express()
const PORT = process.env.PORT
dotenv.config({
    path : '.env'
})

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/tasks',taskRouter)

const start = async () =>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT, ()=>{
            console.log(`Server started on PORT : ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()