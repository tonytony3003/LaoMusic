import React, { useState } from "react";
import { useSearchSongs } from "../api/musicApi";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSearchSongs(keyword);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <div style={{ height: "80vh", overflow: "auto" }} onScroll={handleScroll}>
      <input
        type="text"
        placeholder="Tìm kiếm bài hát..."
        onChange={(e) => setKeyword(e.target.value)}
      />

      {data?.pages?.map((page, pageIndex) =>
        page?.data?.map((song) => (
          <div key={`${pageIndex}-${song.id}`}>{song.name}</div>
        ))
      )}

      {isFetchingNextPage && <p>Đang tải thêm...</p>}
    </div>
  );
}
