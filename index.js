const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const prompt = `家族との最高の思い出！という文章に対して、関東弁で返事して下さい。`;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// APIに接続
const openai = new OpenAIApi(configuration);

// promptを使用して、APIにリクエストを送信
const openAiFunc = async () => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0,
    max_tokens: 30,
  });
  console.log(response.data.choices[0].text);
};
openAiFunc();
