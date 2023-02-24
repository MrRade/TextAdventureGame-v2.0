import axios from "axios";

const getNextChoiceUrl = (StoryID: string) => `http://localhost:8080/story/getNextChoice/${StoryID}`;

export const callGetNextChoice = (StoryID:string, originalNonTerminal:string, chosenTerminal:string) => axios.post(
  getNextChoiceUrl(StoryID),
  {
    originalNonTerminal,
    chosenTerminal,
  },
);
