import axios from "axios";
import { spotify_base_url } from "../../config";

const getTokenFromHeader = (headers) => {
  const token = headers["authorization"];
  return token.split(" ")[1];
};

export const getPlaylists = async (req, res) => {
  const headers = req.headers;

  const response = await axios.get(`${spotify_base_url}me/playlists`, {
    headers: {
      Authorization: `Bearer ${getTokenFromHeader(headers)}`,
    },
  });

  res.json(response.data);
};
