import axios from "axios";

const MUSIC_API = import.meta.env.VITE_MUSIC_API;

export const fetchMusic = (artist, setState) => {
  const BASE_URL = `https://www.theaudiodb.com/api/v1/json/${MUSIC_API}/searchalbum.php?s=${artist}`;
  const finalUrl = BASE_URL;

  axios
    .get(finalUrl)
    .then((response) => response.data)
    .then((data) => setState(data.album))
    .catch((error) => console.error(error));
};

// albums artist search input
// `https://www.theaudiodb.com/api/v1/json/${MUSIC_API}/searchalbum.php?s={Artist name}

export const fetchMusicInfo = (albumId, setState) => {
  const BASE_URL = `https://www.theaudiodb.com/api/v1/json/${MUSIC_API}/album.php?m=${albumId}`;
  const finalUrl = BASE_URL;

  axios
    .get(finalUrl)
    .then((response) => response.data)
    .then((data) => setState(data.album[0]))
    .catch((error) => console.error(error));
};

// Album info
// `https://www.theaudiodb.com/api/v1/json/{APIKEY}/album.php?m=${albumId}`
