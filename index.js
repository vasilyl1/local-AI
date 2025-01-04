import 'isomorphic-fetch';
import ollama from 'ollama';

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
      prompt: 
      `The sky appears blue because of a phenomenon called scattering, which occurs when sunlight interacts with the tiny molecules of gases in the Earth's atmosphere.

Here's what happens:

1. Sunlight enters the Earth's atmosphere and consists of a spectrum of colors, including all the colors of the rainbow (red, orange, yellow, green, blue, indigo, and violet).
2. When sunlight encounters the tiny molecules of gases such as nitrogen (N2) and oxygen (O2), it scatters in all directions.
3. The shorter (blue) wavelengths of light are scattered more than the longer (red) wavelengths because they have less mass and therefore are more easily deflected by the smaller gas molecules.
4. As a result, when we look at the sky, we see mostly the blue light that has been scattered in all directions, making it appear blue.

It's worth noting that the color of the sky can change under different conditions:

* During sunrise and sunset, the sky can take on hues of red, orange, and pink due to the scattering of light by atmospheric particles.
* At high altitudes or during thunderstorms, the sky can appear gray or white due to the presence of more aerosols (tiny particles in the air).
* In areas with high levels of dust or pollution, the sky can appear hazy or brown.

Overall, the blue color of the sky is a result of the scattering of sunlight by the tiny molecules in our atmosphere.`
      ,
    });
    console.log(response.embedding);
  }
  catch (error) {
    console.log(error);
  };
  };

embed();