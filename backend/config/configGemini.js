const { GoogleGenerativeAI } = require("@google/generative-ai");
 const configGemimi = () => {
    const key = process.env.API_KEY;
    console.log(key);
    const genAi = new GoogleGenerativeAI(
      "AIzaSyA_FM9xOCXqxcv7AUS_yXBA03rXgawZQ58"
    );
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });

    return model;
};

module.exports=configGemimi;
