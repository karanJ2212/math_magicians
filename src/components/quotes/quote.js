import React, { useEffect, useState } from 'react';

import './quote.css';

const Quote = () => {
  const [data, setData] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const URL = 'https://api.api-ninjas.com/v1/quotes';
        const res = await fetch(URL, {
          headers: {
            'X-Api-Key': 'cQ99NmJ1Ipv2EbsB/H5nrw==hLo5lAWqyVLczBlR',
          },
        });
        const json = await res.json();
        setData(`"${json[0].quote}" by ${json[0].author}`);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) return <div>Something went wrong!</div>;

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className=" pageContainer">
      <p style={{ fontFamily: 'Tangerine' }}>{data}</p>
    </div>
  );
};

export default Quote;
