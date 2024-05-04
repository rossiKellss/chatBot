const { Router } = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyA_FM9xOCXqxcv7AUS_yXBA03rXgawZQ58");
const chatRoutes = Router();
chatRoutes.get("/text", async (req, res) => {
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = "Write a story about a magic backpack.";
        let text='';

        const result = await model.generateContentStream(prompt);
        
       for await(const chunk of result.stream){
        const chunkText=chunk.text;
        console.log(chunkText);
        text+=chunkText;
       }
        res.send(text);

    }catch(err){
        console.log(err);

    }
    

});

module.exports = chatRoutes;
