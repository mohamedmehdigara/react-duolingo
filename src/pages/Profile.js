import React, { useContext } from 'react';
import { ProgressContext } from '../ProgressContext';

const Profile = () => {
  const { progress } = useContext(ProgressContext);

  return (
    <div>
      <h1>Profile Page</h1>
      <h2>Profile Information</h2>
      {/* Display user's profile information */}
      <h2>Achievements</h2>
      {/* Display user's achievements */}
      <h2>Progress</h2>
      <p>Current progress: {progress}%</p>
    </div>
  );
};

export default Profile;
