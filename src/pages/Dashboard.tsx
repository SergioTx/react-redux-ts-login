import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';

import SecretDashboard from '../components/SecretDashboard';
import Settings from '../components/Settings';
import './Dashboard.css';
import { ReactComponent as SettingsImg } from '../assets/icons/settings.svg';
import { ReactComponent as DashboardImg } from '../assets/icons/dashboard.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const userEmailSelector = (state: RootState) => state.auth.email;

const Dashboard = () => {
  const { path } = useRouteMatch();
  const email = useSelector(userEmailSelector);

  return (
    <div className="dashboard">
      <header>
        <h1>dashboard</h1>
        <div>
          <div>
            <strong>{email}</strong>
          </div>
          <div>Admin</div>
        </div>
      </header>
      <aside>
        <ul>
          <li>
            <NavLink exact to={`${path}`}>
              <DashboardImg />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink exact to={`${path}/settings`}>
              <SettingsImg />
              Settings
            </NavLink>
          </li>
        </ul>
      </aside>
      <main>
        <Switch>
          <Route path={`${path}/settings`} component={Settings} />
          <Route path={path} exact component={SecretDashboard} />
        </Switch>
      </main>
    </div>
  );
};

export default Dashboard;
