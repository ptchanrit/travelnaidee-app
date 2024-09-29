import axios from "axios";

const url = import.meta.env.VITE_API_ENDPOINT;

export const fetchArticles = async (keyword?: string) => {
  const response = await axios.get(`${url}/api/trips`, {
    params: { keyword },
  });

  console.log(response.data);
  return response.data;
};
