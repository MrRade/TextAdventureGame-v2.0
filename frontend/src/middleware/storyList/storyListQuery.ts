import {useQuery} from "react-query";
import {callGetStoryList} from "./storyListCall";

interface story{
    id: string
    name: string
}


interface StoryList {
    list: story[]
}

export const useGetStoryList = () => {
    const key = "StoryList"
    return useQuery(key, () => callGetStoryList().then(({data}) => Promise.resolve(data)), {retry:1})
}