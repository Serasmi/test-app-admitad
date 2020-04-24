import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { ReactComponent as LeftArrow } from '../../assets/images/icons/left-arrow.svg';
import './sidebar.scss';

const GoToBack = () => {
  return (
    <Link to="/">
      <LeftArrow width={16} height={16} />
    </Link>
  );
};

const Sidebar = ({ routes }) => (
  <div className="sidebar">
    <Switch>
      {routes.map(({ title, path, exact } = {}) => (
        <Route key={path} {...{ path, exact }}>
          {path !== '/' && <GoToBack />}
          <span className="title">{title}</span>
        </Route>
      ))}
    </Switch>
  </div>
);

export default Sidebar;
