import React from 'react';
import netflixOriginals from '../../assets/netflix-originals.json';
import trendingNow from '../../assets/trending-now.json';
import Greeting from '../../components/Greeting/Greeting';
import PosterList from '../../components/PosterList/PosterList';

export default function Home(props) {
  return (
    <div>
      <Greeting username={props.username} />
      <PosterList title="netflix originals" posters={netflixOriginals} />
      <PosterList title="trending now" posters={trendingNow} />
    </div>
  );
}
