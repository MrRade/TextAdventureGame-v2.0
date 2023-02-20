import { useQuery } from "react-query";
import { callCreateStory } from "./createStoryCall";

export const useCreateStory = (name: string) => useQuery(
  name,
  () => callCreateStory(name).then(({ data }) => Promise.resolve(data)),
  { retry: 1 },
);