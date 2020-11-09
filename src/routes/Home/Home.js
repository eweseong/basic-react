import React from 'react';
import Greeting from '../../components/Greeting/Greeting';
import PosterList from '../../components/PosterList/PosterList';
import WithLoading from '../../components/WithLoading/WithLoading';
import { useUserContext } from '../../contexts/UserContext';
import ShowService from '../../services/showService';

const PosterListLoader = WithLoading(PosterList);

export default function Home() {
  const { user } = useUserContext();
  return (
    <div>
      <Greeting username={user} />
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
