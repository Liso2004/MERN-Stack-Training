import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./connfig/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); //allows us to accept JSON data in the req.body 

app.post("/api/Products", async (req, res ) => {
    const product = req.body;   //user will send this data 
    
    
    if (!product.name || !product.Price || !product.image) {
        return res.status(400).json({ success: false, Message : " Please provide  all fields "});
    }
    
    const newProduct = new Product(product);
    
    try {
        await newProduct.save();
        res.status(201).json({  success : true, data : newProduct});        
    } catch (error) {
        console.error("Error in Create product:", error.Message );
        res.status(500).json({ success : false, message: "Server Error" });  
    }
});


    
app.listen(5000 , () => {
    connectDB();
    console.log("Server started at http//localhost:5000");
});
