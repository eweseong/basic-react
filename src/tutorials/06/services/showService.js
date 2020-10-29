import axios from 'axios';

const NETFLIX_NETWORK_ID = '213';
const POSTER_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const ShowService = (() => {
  const httpClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
  });

  httpClient.interceptors.request.use((config) => {
    if (!config.params) {
      config.params = {};
    }

    config.params.api_key = process.env.REACT_APP_MOVIE_DB_API_KEY;
    return config;
  });

  function appendImageBase(imagePath) {
    return `${POSTER_IMAGE_BASE_URL}${imagePath}`;
  }

  function mapResult(results) {
    return results.map((result) => ({
      ...result,
      backdrop_path: appendImageBase(result.backdrop_path),
      poster_path: appendImageBase(result.poster_path),
    }));
  }

  function mapResults({ data: { results = [] } }) {
    return mapResult(results);
  }

  return {
    getNetflixOriginals: () => {
      return httpClient
        .get('/discover/tv', {
          params: {
            with_networks: NETFLIX_NETWORK_ID,
          },
        })
        .then(mapResults);
    },

    getTrendingNow: () => {
      return httpClient
        .get('/trending/all/week', {
          params: {
            language: 'en-US',
          },
        })
        .then(mapResults);
    },
  };
})();

export default ShowService;
