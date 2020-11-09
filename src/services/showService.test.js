import axios from 'axios';
import ShowService from './showService';

describe('ShowService', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        results: [
          {
            backdrop_path: '/backdrop_path',
            poster_path: '/poster_path',
          },
        ],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function assertResultImagesPrefix(data) {
    expect(data).not.toBeNull();
    expect(data).toHaveLength(1);
    const { backdrop_path, poster_path } = data[0];
    expect(backdrop_path).toEqual(
      'https://image.tmdb.org/t/p/original/backdrop_path'
    );
    expect(poster_path).toEqual(
      'https://image.tmdb.org/t/p/original/poster_path'
    );
  }

  describe('getNetflixOriginals()', () => {
    it('should prefix image data with base image URL', (done) => {
      expect(axios.get).not.toHaveBeenCalled();
      ShowService.getNetflixOriginals().then((data) => {
        expect(axios.get).toHaveBeenCalledWith('/discover/tv', {
          params: { with_networks: '213' },
        });

        assertResultImagesPrefix(data);
        done();
      });
    });
  });

  describe('getTrendingNow()', () => {
    it('should prefix image data with base image URL', (done) => {
      expect(axios.get).not.toHaveBeenCalled();
      ShowService.getTrendingNow().then((data) => {
        expect(axios.get).toHaveBeenCalledWith('/trending/all/week', {
          params: { language: 'en-US' },
        });

        assertResultImagesPrefix(data);
        done();
      });
    });
  });
});
