import express from "express"
import cors from "cors"
import "dotenv/config"
import songRouter from "./src/routes/songRoute.js"
import connectDb from "./src/config/mongodb.js"
import connectCloudinary from "./src/config/cloudinary.js"
import albumRouter from "./src/routes/albumRoutes.js"


//app config
const app = express()
const port = process.env.PORT || 4000
connectDb();
connectCloudinary();

//middleware
app.use(express.json())
app.use(cors())

//initializing routes
app.use("/api/song",songRouter)
app.use("/api/album",albumRouter)

//routes
app.get("/",(req,res)=>{
    res.send("API is working")
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`)
})