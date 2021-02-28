import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSettings } from '../store/settings';
import { RootState } from '../store/store';
import UserCard from './UserCard/UserCard';

const selectUser = (state: RootState) => state.settings.user;

const Settings = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) dispatch(fetchSettings());
  }, [dispatch, user]);

  const userCard = user ? <UserCard user={user} /> : null;

  return (
    <>
      <h2>Settings</h2>
      {userCard}
    </>
  );
};

export default Settings;
