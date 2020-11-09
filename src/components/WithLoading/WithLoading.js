import React, { useEffect, useState } from 'react';
import './WithLoading.css';

export default function WithLoading(ListComponent) {
  return function WithLoading({ load, ...otherProps }) {
    const [isLoading, setLoading] = useState(true);
    const [posters, setPosters] = useState([]);

    useEffect(() => {
      load().then((data) => {
        setLoading(false);
        setPosters(data);
      });
    }, [load]);

    if (isLoading) {
      return <p className="loading">Loading something</p>;
    }

    return <ListComponent posters={posters} {...otherProps} />;
  };
}
