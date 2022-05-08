import React from 'react';
import { Link } from 'react-router-dom';

const ReadMeList = ({ readmes, title }) => {
  if (!readmes.length) {
    return <h3>No ReadMe Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {readmes &&
        readmes.map(readme => (
          <div key={readme._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${readme.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {readme.username}
              </Link>{' '}
              ReadMe on {readme.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/readme/${readme._id}`}>
                <p>{readme.description}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReadMeList;