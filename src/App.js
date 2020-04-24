import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import Main from './pages/main';
import History from './pages/history';
import NotFound from './pages/notFound';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

const routes = [
  {
    title: 'Главная',
    path: '/',
    exact: true,
    component: <Main />,
  },
  {
    title: 'История',
    path: '/history',
    component: <History />,
  },
];

function App() {
  return (
    <div className="App-container">
      <Router>
        <Navigation />

        <div id="content">
          <Sidebar {...{ routes }} />

          <div className="content">
            <Switch>
              {routes.map(({ path, exact, component } = {}) => (
                <Route key={path} {...{ path, exact }}>
                  {component}
                </Route>
              ))}

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
