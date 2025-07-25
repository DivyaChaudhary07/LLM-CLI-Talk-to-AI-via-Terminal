import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync';

const ai = new GoogleGenAI({ apiKey: "" });


const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [],
  });



async function main(){
   
   const userProblem = readlineSync.question("Ask me anything--> ");
    const response = await chat.sendMessage({
    message: userProblem,
  });
  console.log("\n");
  console.log(response.text);
  main();
}


main();