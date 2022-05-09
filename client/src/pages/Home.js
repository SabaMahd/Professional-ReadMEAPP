import React from 'react';
import { useQuery } from '@apollo/client';
import { COMPOSE_README } from '../utils/queries';
import ReadMeList from '../components/ReadMeList';
import About from '../components/About';

const Home = () => {
    // use useQuery hook to make query request
  const { loading, data } = useQuery(COMPOSE_README);
  const readmes = data?.readmes || [];
            console.log(readmes);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
            <About />
        </div>
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReadMeList readmes={readmes} title="Some Feed for Readme(s)..." />
          )}
        </div>
      </div>
</main>
  );
};

export default Home;
