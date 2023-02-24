import { useQuery } from "@tanstack/react-query";
import { callGetNextChoice } from "./getNextChoiceCall";

export const useGetNextChoice = (id:string, originalNonTerminal:string, chosenTerminal:string) => useQuery(
  [id],
  () => callGetNextChoice(id, originalNonTerminal, chosenTerminal)
    .then(({ data }) => Promise.resolve(data)),
  { retry: 1 },
);
