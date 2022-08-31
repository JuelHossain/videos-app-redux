import axios from "../../utils/axios";

export const getVideos = async (tags, search) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }

  const { data } = await axios.get(`/videos/?${queryString}`);

  return data;
};

export const getAuthorVideos = async (author) => {
  const { data } = await axios.get(`/videos?author_like=${author}`);
  return data;
};

export const getPagiVideos = async (page, limit) => {
  const { data } = await axios.get(`/videos/?_page=${page}&_limit=${limit}`);
  return data;
};

export const getVideoCount = async () => {
  const { data } = await axios.get("/videos");
  return data.length;
};
