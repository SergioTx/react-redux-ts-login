import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchDashboard } from '../store/dashboard';
import { RootState } from '../store/store';
import MatchCard from './MatchCard/MatchCard';

const selectDashboard = (state: RootState) => state.dashboard;

const SecretDashboard = () => {
  const { loaded, matches } = useSelector(selectDashboard);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loaded) dispatch(fetchDashboard());
  }, [dispatch, loaded]);

  return (
    <>
      <h2>Dashboard</h2>
      <div className="matches">
        {matches.map((match) => (
          <MatchCard match={match} />
        ))}
      </div>
    </>
  );
};

export default SecretDashboard;
