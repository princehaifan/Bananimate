/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

export const promptSuggestions = [
  { emoji: '🤖', prompt: 'Make a cool micro sci-fi story spanning a Millenia about a robot and its maker.' },
  { emoji: '💡', prompt: 'I just had a great idea! in style of a hand-drawn pencil sketch.' },
  { emoji: '🛑', prompt: 'Tell a little story using the objects in the image, in style of stop-motion animation.' },
  { emoji: '💫', prompt: 'Spin the scene 360 degrees in 3D.' },
  { emoji: '🌸', prompt: 'Flower up the scene.' },
  { emoji: '🏃', prompt: 'Tell them I\'m "On my way!", 80s video game style' },
  { emoji: '🎨', prompt: 'Animate this as a beautiful watercolor painting coming to life.' },
  { emoji: '💥', prompt: 'Make it explode like a firework.' },
  { emoji: '👾', prompt: 'Transform this into 8-bit pixel art.' },
  { emoji: '🐲', prompt: 'Add a majestic dragon flying through the scene.' },
  { emoji: '🕺', prompt: 'Make everything in the image dance to a disco beat.' },
  { emoji: '🌧️', prompt: 'Create a rainy day mood with raindrops on a window pane.' },
  { emoji: '🦋', prompt: 'A butterfly emerges from a chrysalis and flies away.' },
  { emoji: '🚀', prompt: 'Launch it into space!' },
  { emoji: '👻', prompt: 'A spooky ghost appears and then fades away.' },
  { emoji: '🌳', prompt: 'Show a tree growing from a seed to full bloom over seasons.' },
  { emoji: '🏙️', prompt: 'A time-lapse of a bustling city from day to night.' },
  { emoji: '🫠', prompt: 'Melt the entire scene like an ice cream on a hot day.' },
  { emoji: '📖', prompt: 'Open it up like a pop-up book.' },
  { emoji: '⚡', prompt: 'A dramatic lightning strike reveals a hidden detail.' },
  { emoji: '🔧', prompt: 'Assemble the object in the image, IKEA instruction manual style.' },
  { emoji: '🎂', prompt: 'Magically decorate a birthday cake.' },
  { emoji: '🏎️', prompt: 'A high-speed race car zooms through.' },
  { emoji: '🪨', prompt: 'Carve the image out of stone, like a sculptor.' },
  { emoji: '🍂', prompt: 'Leaves fall gently in an autumn forest.' },
  { emoji: '☀️', prompt: 'A brilliant sunrise over a mountain landscape.' },
  { emoji: '🧑‍🚀', prompt: 'An astronaut floats weightlessly in space.' },
  { emoji: '🌊', prompt: 'Ocean waves crashing on a sandy beach.' },
  { emoji: '🤯', prompt: 'A mind-bending psychedelic journey.' },
  { emoji: '🎬', prompt: 'Animate this in the style of a silent film, with title cards.' },
  { emoji: '🐱', prompt: 'A cat chases a laser pointer around the scene.' },
  { emoji: '🔥', prompt: 'The scene is consumed by magical, colorful flames.' },
  { emoji: '💎', prompt: 'The image shatters into a million sparkling diamonds.' },
  { emoji: '⏳', prompt: 'Show the object aging and decaying over time.' },
  { emoji: '🧩', prompt: 'The image assembles itself like a jigsaw puzzle.' },
  { emoji: '🎶', prompt: 'Musical notes float and dance around the subject.' },
  { emoji: '🦢', prompt: 'Fold the scene into an origami creation that comes to life.' },
  { emoji: '🌌', prompt: 'The scene dissolves into a starry nebula.' },
  { emoji: '🚂', prompt: 'A vintage steam train chugs through the landscape.' },
  { emoji: '🥷', prompt: 'A ninja appears in a puff of smoke, performs a trick, and vanishes.' },
  { emoji: '👨‍🔬', prompt: 'A mad scientist experiments with bubbling potions.' },
  { emoji: '🎈', prompt: 'Balloons lift the subject up into the sky.' },
  { emoji: '📜', prompt: 'The image rolls up like an ancient scroll.' },
  { emoji: '🛹', prompt: 'Animate a cool skateboarding trick.' },
  { emoji: '📈', prompt: 'A graph animates to show dramatic growth.' },
  { emoji: '🍭', prompt: 'A whimsical candy-land adventure.' },
  { emoji: '📺', prompt: 'Animate with vintage TV static and channel surfing effects.' },
  { emoji: '🏗️', prompt: 'Construct a building with animated cranes and workers.' },
  { emoji: '🧙‍♂️', prompt: 'A wizard casts a magical spell with sparkling effects.' },
  { emoji: '🗺️', prompt: 'An old map unfolds to reveal a treasure location.' },
  { emoji: '🕵️', prompt: 'A detective looks for clues with a magnifying glass.' },
  { emoji: '❤️', prompt: 'A heart beats and sends out loving vibes.' },
  { emoji: '🛸', prompt: 'A UFO abducts something from the scene with a tractor beam.' },
  { emoji: '🍜', prompt: 'A delicious bowl of ramen being prepared.' },
  { emoji: '🦈', prompt: 'A shark swims menacingly across the screen.' },
  { emoji: '🌪️', prompt: 'A tornado sweeps through and transforms the scene.' },
  { emoji: '✍️', prompt: 'The words "Hello World" are written by a ghostly hand.' },
  { emoji: '📸', prompt: 'A camera shutter effect that transitions to a black and white version.' },
  { emoji: '🗯️', prompt: 'Animate this in a comic book style with "POW!" and "BAM!" effects.' },
  { emoji: '🧊', prompt: 'The scene freezes over with intricate frost patterns.' },
  { emoji: '🌱', prompt: 'A tiny plant sprouts and grows towards the sun.' },
  { emoji: '👑', prompt: 'A crown is magically placed on the subject\'s head.' },
];

export const buildCreativeInstruction = (
  storyPrompt: string, 
  originalImage: string | null, 
  frameCount: number
): string => {
  const baseInstruction = `Create a short, ${frameCount}-frame animation. The movement should be smooth and believable, and the final frame should loop back smoothly to the first.`;
  const styleConsistencyInstruction = `It is crucial that all ${frameCount} frames are in the same, consistent artistic style.`;
  const identityLockInstruction = `Maintain the subject's core facial features and identity consistently across all frames. The person or subject should be clearly recognizable from one frame to the next. Avoid distorting the face or adding new features.`;
  
  const frameDurationInstruction = `
Based on the creative direction, determine the optimal frame duration for the animation.
- For slow, story-like animations, choose a longer duration (e.g., 400-2000ms per frame).
- For fast, dynamic animations, choose a shorter duration (e.g., 80-120ms per frame).
`;

  let creativeDirection = '';
  if (originalImage) {
    creativeDirection = `
CREATIVE DIRECTION (based on user image and prompt):
Animate the subject from the provided image based on the following description: "${storyPrompt}".
${baseInstruction}
${styleConsistencyInstruction}
${identityLockInstruction}`;
  } else if (storyPrompt) {
    creativeDirection = `
CREATIVE DIRECTION (based on user prompt):
Create an animation from scratch based on the following description: "${storyPrompt}".
${baseInstruction}`;
  } else {
      return '';
  }

  return `
${creativeDirection}
${frameDurationInstruction}

REQUIRED RESPONSE FORMAT:
Your response MUST contain two parts:
1. A valid JSON object containing a single key: "frameDuration". The value must be a number representing the milliseconds per frame (between 80 and 2000, per instructions above). Do not wrap the JSON in markdown backticks.
2. The ${frameCount}-frame sprite sheet image.

Example of the JSON part:
{"frameDuration": 150}
`;
};