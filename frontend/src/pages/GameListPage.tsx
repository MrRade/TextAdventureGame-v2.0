import React from 'react';
import {useGetStoryList} from "../middleware/storyList/storyListQuery";

export function GameListPage() {
    const {data} = useGetStoryList()
  return (
    <div>
      <div className="white w-72 h-72">
          {JSON.stringify(data)}
      </div>
    </div>
  );
}
