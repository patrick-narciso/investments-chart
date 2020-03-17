import React from 'react';
import useFetch from 'client/hooks/useFetch';
import { API_URL, PROXY_URL } from 'client/config';

const Home = () => {
  const { data } = useFetch({ url: `${PROXY_URL}/proxy?url=${API_URL}` });
  return <>{data && data.map(item => <div>{item}</div>)}</>;
};

export default Home;
