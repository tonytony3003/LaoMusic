import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import fetcher from "./fetcher";

// 1. Nghe gì hôm nay
export const useRecommendedSongs = () => {
  return useQuery({
    queryKey: ["recommendedSongs"],
    queryFn: async () => {
      const { data } = await fetcher.get("/songs/recommended");
      return data;
    },
  });
};

// 2. Nhạc top 100
export const useTop100 = () => {
  return useQuery({
    queryKey: ["top100"],
    queryFn: async () => {
      const { data } = await fetcher.get("/playlists/top100");
      return data;
    },
  });
};

// 3. Các chủ đề tiếp theo
export const useTopGenresPlaylists = () => {
  return useQuery({
    queryKey: ["topGenresPlaylists"],
    queryFn: async () => {
      const { data } = await fetcher.get("/genres/top-genres-playlists");
      return data;
    },
  });
};

// 4. Ca sỹ yêu thích
export const useTopFavouriteArtists = () => {
  return useQuery({
    queryKey: ["topFavouriteArtists"],
    queryFn: async () => {
      const { data } = await fetcher.get("/artists/top-favourite");
      return data;
    },
  });
};

// 5. Tìm kiếm bài hát - Infinite scroll
export const useSearchSongs = (keyword) => {
  return useInfiniteQuery({
    queryKey: ["searchSongs", keyword],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await fetcher.get("/search/songs", {
        params: {
          keyword,
          page: pageParam,
          limit: 20, // tuỳ API hỗ trợ limit
        },
      });
      return data;
    },
    getNextPageParam: (lastPage, allPages) => {
      // API này cần xem response có trả totalPages hoặc nextPage không
      if (lastPage?.meta?.currentPage < lastPage?.meta?.totalPages) {
        return lastPage.meta.currentPage + 1;
      }
      return undefined;
    },
    enabled: !!keyword, // chỉ chạy khi có keyword
  });
};
