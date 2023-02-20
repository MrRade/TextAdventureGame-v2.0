import React from 'react';
import { useGetStoryList } from "../middleware/storyList/storyListQuery";

export function GameListPage() {
  const { data: storyList } = useGetStoryList();
  return (
    <div>
      <div className="white w-72 h-72">
          {JSON.stringify(storyList)}
      </div>
    </div>
  );
}
