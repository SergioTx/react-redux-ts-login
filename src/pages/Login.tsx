import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../store/auth';
import { RootState } from '../store/store';
import './Login.css';

const loadingSelector = (state: RootState) => state.auth.loading;
const errorSelector = (state: RootState) => state.auth.error;

const Login = () => {
  // TODO DELETE INITIAL VALUES
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('testtest');
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const loginError = useSelector(errorSelector);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="login">
      <div className="login-form">
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          <label>
            Email
            <input
              type="email"
              value={email}
              disabled={loading}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              disabled={loading}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button disabled={loading}>Sign In</button>
          <p className="danger">{loginError}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
