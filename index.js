import express from 'express'
import dotenv from 'dotenv'
import ConnectDB from './dbConnection.js'
import AuthRoutes from './routes/authRoutes.js'
import UserRoutes from './routes/userRoutes.js'
import FeedBackRoutes from './routes/feedBackRoutes.js'
import SearchRoutes from './routes/searchRoutes.js'
import colors from 'colors'
const app=express();
app.use(express.json())
dotenv.config()
ConnectDB();

app.listen(process.env.PORT || 5000,()=>{
    console.log('connected Successfully'.yellow)
})

app.use('/api/auth',AuthRoutes)

app.use('/api/user',UserRoutes);
app.use('/api/feedBack',FeedBackRoutes)

app.use('/api/search',SearchRoutes)