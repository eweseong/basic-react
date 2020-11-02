import React, { Component } from 'react';
import Greeting from '../../components/Greeting/Greeting';
import PosterList from '../../components/PosterList/PosterList';
import WithLoading from '../../components/WithLoading/WithLoading';
import ShowService from '../../services/showService';

const PosterListLoader = WithLoading(PosterList);

export default class Home extends Component {
  render() {
    return (
      <div>
        <Greeting username={this.props.username} />
        <PosterListLoader
          title="trending now"
          load={ShowService.getNetflixOriginals}
        />
        <PosterListLoader
          title="netflix originals"
          load={ShowService.getTrendingNow}
        />
      </div>
    );
  }
}
