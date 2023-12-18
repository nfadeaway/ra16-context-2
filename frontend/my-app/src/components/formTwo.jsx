import React, {useEffect} from 'react';
import useJsonFetch from '../hooks/useJsonFetch.js';

const FormTwo = (props) => {

  let [data, loading, error] = useJsonFetch(props.url)

  useEffect(() => {
  }, [data, loading, error])

  return (
    <div className="form">
      {loading && <p>Loading...</p>}
      {data}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FormTwo;