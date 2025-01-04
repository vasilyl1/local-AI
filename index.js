import 'isomorphic-fetch';
import ollama from 'ollama';
import { scrapes, scrapesArm, scrapesGrass, message } from './content.js';

const chat = async () => {
  try {
    const response = await ollama.chat({
      model: 'llama3.2',
      messages: [{ role: 'user', content: 'Why is the sky blue?' }],
    });
    console.log(response.message.content);
  }
  catch (error) {
    console.log(error);
  };
};

const embed = async () => {
  try {
    const response = await ollama.embeddings({
      model: 'nomic-embed-text',
      prompt: message + ' ' + scrapes
      ,
    });
    console.log(message + ' ' + scrapes);
    console.log(JSON.stringify(response.embedding));

  }
  catch (error) {
    console.log(error);
  };
};

embed();