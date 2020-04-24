import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './nav.scss';

const CustomLink = ({ children, to, path }) => {
  const isActive = to === path ? 'active' : '';

  return (
    <li>
      <Link className={isActive} {...{ to }}>
        {children}
      </Link>
    </li>
  );
};

const Navigation = ({ location: { pathname } }) => {
  return (
    <div className="nav">
      <ul>
        <CustomLink to="/" path={pathname}>
          Главная
        </CustomLink>
        <CustomLink to="/history" path={pathname}>
          История
        </CustomLink>
      </ul>
    </div>
  );
};

export default withRouter(Navigation);
