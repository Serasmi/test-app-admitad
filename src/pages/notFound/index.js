import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      Page doesn't exist. Go to <Link to="/">main</Link>.
    </div>
  );
};

export default NotFound;
