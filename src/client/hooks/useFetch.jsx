/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ url, method = 'GET', options = {}, headers = {} }) => {
  const [data, setData] = useState(null);
  const [isFetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({ method, url, data: options, headers });
        setData(response.data);
      } catch (error) {
        throw new Error(error);
      } finally {
        setFetching(false);
      }
    };
    fetchData();
  }, []);

  return { data, isFetching };
};
