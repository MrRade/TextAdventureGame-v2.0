import { useQuery } from "@tanstack/react-query";
import { callGetNextChoice } from "./getNextChoiceCall";

export const useGetNextChoice = (StoryID:string, originalNonTerminal:string, chosenTerminal:string) => useQuery(
  [StoryID],
  () => callGetNextChoice(StoryID, originalNonTerminal, chosenTerminal)
    .then(({ data }) => Promise.resolve(data)),
  { retry: 1 },
);
