import { useQuery } from "@tanstack/react-query";
import { callGetStoryList } from "./storyListCall";

interface story{
    id: string
    name: string
}

interface StoryList {
    list: story[]
}

export const useGetStoryList = () => useQuery(
  ['StoryList'],
  () => callGetStoryList().then(({ data }) => Promise.resolve(data)),
  { retry: 1 },
);
