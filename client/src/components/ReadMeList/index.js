import React from 'react';

const ReadMeList = ({ readmes, title }) => {
  if (!readmes.length) {
    return <h3>No Readme Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {readmes &&
        readmes.map(readme => (
          <div key={readme._id} className="card mb-3">
            <p className="card-header">
              {readme.username}
              ReadMe Created on {readme.createdAt}
            </p>
            <div className="card-body">
              <p>{readme.description}</p>
              <P>{readme.technologies}</P>
              <P>{readme.installation}</P>
              <P>{readme.usage}</P>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReadMeList;