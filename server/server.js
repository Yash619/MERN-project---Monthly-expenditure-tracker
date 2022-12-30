import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = 4000
const app = express();

app.use(cors);

await mongoose.connect(
    "mongodb+srv://yash61924:GAGvtz8c8FdS4AHy@mern-project.0mkn86r.mongodb.net/?retryWrites=true&w=majority"
    ).then(()=> console.log("MongoDB connection is successful"))
    .catch((err)=> console.error(err));

app.get('/',(req,res) => {
    res.send("Hello World")
});

app.listen(PORT, ()=>{
    console.log("Server is running at http://localhost:4000")
});