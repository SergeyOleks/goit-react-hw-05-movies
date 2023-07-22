import { useState, useEffect } from 'react';
import { fetchFindResult } from 'components/fetchFindResult';

import Trending from 'components/Trending/Trending';

export default function Home() {
  const [trend, setTrend] = useState('');

  const trendData = async () => {
    const fetch = await fetchFindResult('trending/movie/day');
    setTrend(fetch.data.results);
  };
  useEffect(() => {
    trendData();
  }, []);

  // console.log(trend);
  return (
    <div>
      <h1>Trending today</h1>
      {trend && <Trending trend={trend} />}
    </div>
  );
}
