import React from 'react';
import { useGetStoryList } from "../middleware/storyList/storyListQuery";

export function GameListPage() {
  const { data } = useGetStoryList();
  console.log( data );
  return (
    <div>
      <div className="white w-72 h-72">
        Liste
      </div>
    </div>
  );
}
