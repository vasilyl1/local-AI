import 'isomorphic-fetch';
import { Ollama } from 'ollama';
import { scrapes, message, prompt } from './content.js';

const ollama = new Ollama({ host: process.env.OLLAMA_HOST || 'http://localhost:11434' });

const handleResponse = (response) => {
  console.log(response.message?.content || JSON.stringify(response.embedding));
};
const handleError = (error) => {
  console.error('An error occurred:', error.message);
};

const chat = async () => {
  try {
    const response = await ollama.chat({
      model: 'qwen2.5-coder:14b',

      messages: [{ role: 'user', content: prompt }],
    });
    handleResponse(response);
  }
  catch (error) { handleError(error); };
};

const embed = async () => {
  try {
    const response = await ollama.embeddings({
      model: 'nomic-embed-text',
      prompt: message + ' ' + scrapes
      ,
    });
    console.log(message + ' ' + scrapes);
    handleResponse(response);

  }
  catch (error) { handleError(error); };

};

try {
  console.log('Processing your message...');
  const startTime = performance.now();  // Record the start time
  await chat(); // Call the chat function with user input
  const endTime = performance.now();  // Record the end time
  console.log(`Execution time: ${(endTime - startTime) / 1000} seconds`);
} catch (error) { console.error('An error occurred while processing your message:', error.message); };