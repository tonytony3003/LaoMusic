import React from "react";
import {
  useRecommendedSongs,
  useTop100,
  useTopGenresPlaylists,
  useTopFavouriteArtists,
} from "../api/musicApi";

export default function MainContent() {
  const { data: recommended } = useRecommendedSongs();
  const { data: top100 } = useTop100();
  const { data: genres } = useTopGenresPlaylists();
  const { data: artists } = useTopFavouriteArtists();

  return (
    <div style={{ padding: 20 }}>
      <h2>Nghe gì hôm nay</h2>
      {recommended?.data?.map((song) => (
        <div key={song.id}>{song.name}</div>
      ))}

      <h2>Nhạc top 100</h2>
      {top100?.data?.map((playlist) => (
        <div key={playlist.id}>{playlist.name}</div>
      ))}

      <h2>Các chủ đề</h2>
      {genres?.data?.map((genre) => (
        <div key={genre.id}>{genre.name}</div>
      ))}

      <h2>Ca sỹ yêu thích</h2>
      {artists?.data?.map((artist) => (
        <div key={artist.id}>{artist.name}</div>
      ))}
    </div>
  );
}
