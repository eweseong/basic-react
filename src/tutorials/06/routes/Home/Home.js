import React, { Component } from 'react';
import Greeting from '../../components/Greeting/Greeting';
import PosterList from '../../components/PosterList/PosterList';
import WithLoading from '../../components/WithLoading/WithLoading';
import ShowService from '../../services/showService';

const PosterListLoader = WithLoading(PosterList);

export default class Home extends Component {
  state = {
    netflixOriginals: [],
  };

  componentDidMount() {
    /**
     * This is the lifecycle where traditionally API requests are made,
     * it is triggered after the component is rendered once. Most of the
     * time API would take time to response, and you would likely want to
     * include some loading text or visual aid to tell the user that the
     * application is loading something, hence we need to allow the component
     * to render the loader before actually fetching it, otherwise the
     * component will not appear on the screen at all. Visual aid is important
     * to tell user to wait for the API to load
     */
    const url = new URL('https://api.themoviedb.org/3/discover/tv');
    url.search = new URLSearchParams({
      api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
      with_networks: '213',
    }).toString();

    window
      .fetch(url)
      .then((response) => response.json())
      .then(({ results }) => {
        return results.map((result) => ({
          ...result,
          backdrop_path: `https://image.tmdb.org/t/p/original${result.backdrop_path}`,
          poster_path: `https://image.tmdb.org/t/p/original${result.poster_path}`,
        }));
      })
      .then(console.log);

    /**
     * repeating the entire fetch process above could be a hassle, hence
     * it is always recommended to create a service wrapper that makes all
     * the network call. couple of benefits in doing so:
     * 1. it can be split out and develop by another developer concurrently
     * 2. it can be reused by other components
     * 3. if there's changes to the API, your does not need to care unless
     *    the contract of the API changes
     */
    ShowService.getNetflixOriginals().then((data) => {
      if (data.length > 0) {
        this.setState({
          netflixOriginals: data,
        });
      }
    });
    /**
     * Updating the fetched data into a state like above make sense,
     * but what if you have 5 or more list of similar algorithm? You would
     * be repeating fetching process over and over again.
     *
     * Should that happen we can use a High Order Component (HOC) to
     * decoupled ourselves from repeating the algorithm. HOC promotes
     * sharing/reusing logic across different component.
     */
  }

  render() {
    return (
      <div>
        <Greeting username={this.props.username} />
        <PosterList
          title="netflix originals"
          posters={this.state.netflixOriginals}
        />
        <PosterListLoader
          title="trending now"
          load={ShowService.getTrendingNow}
        />
      </div>
    );
  }
}
