import axios from "axios";

const createStoryUrl = (name: string) => `http://localhost:8080/story/create/${name}`;

export const callCreateStory = (name: string) => axios.post(
  createStoryUrl(name),
  [
    {
      startingNonTerminal: 'string',
      chosenTerminal: 'string',
      followingNonTerminal: 'string',
      choiceText: 'string',
      ending: true,
    },
  ],
);
