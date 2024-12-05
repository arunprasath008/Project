const express=require('express');
const cors=require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app=express();
app.use(cors());
app.use(express.json());
const genAI = new GoogleGenerativeAI("AIzaSyD4HM-7kFUd20-8CTEsrQ-L765VRMj3H2M");


app.post('/gemini',async(req,res)=>{
    const location=req.body.query;
    const days=req.body.days;
    const amount=req.body.budget;
    const people=req.body.people;
    const prompt = `Generate Travel Plan for Location: ${location}, for ${days}Days for ${people} with a ${amount} budget,  suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the ${location} for ${days} days with each day plan with best time to visit in JSON format.`;
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log(model);
            if (!model) {
                console.error("Model initialization failed.");
                return res.status(500).json({ error: "Model not available." });
            }
    
            const result = await model.generateContent(prompt);
    
            if (!result || !result.response) {
                console.error("Invalid response from model.");
                return res.status(500).json({ error: "Error generating optimized code." });
            }
    
            const optimizedCode = result.response.text();
            console.log("Optimized Code:", optimizedCode);
             res.status(200).send(optimizedCode);
    }
    catch(e){
        console.log("message from server",e);
    }
})
app.get("/",(req,res)=>{
    res.send("HI")
    }
)
app.listen(5000,()=>{
    console.log('server is running');
})
