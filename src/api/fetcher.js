import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://music.tinasoft.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default fetcher;
