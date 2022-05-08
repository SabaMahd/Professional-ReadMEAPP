import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';

import { Navigate, useParams } from 'react-router-dom';

import ReadMeList from '../components/ThoughtList';
import { GET_ME, QUERY_USER } from '../utils/queries';
import { ADD_USER } from '../utils/mutations';

import GenerateReadmeForm from '../components/GenerateReadmeForm';


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }


  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
      </div>
    <div className="flex-row justify-space-between mb-3">
      <div className="col-12 mb-3 col-lg-8">
        <ReadMeList readmes={user.readmes} title={`${user.username}'s readmes...`} />
      </div>
    </div>

    <div className="mb-3">{!userParam && <GenerateReadmeForm />}</div>
</div>

      
  );
};

export default Profile;
