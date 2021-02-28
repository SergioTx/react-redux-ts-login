import React from 'react';

import { UserSettings } from '../../store/settings';
import './UserCard.css';

const UserCard = (props: { user: UserSettings }) => {
  const { name, birthDate, gender, height, skill, city } = props.user;
  return (
    <div className="user card">
      <div className="card-header">
        {name} <span className="skill">{skill}</span>
      </div>
      <div className="card-body">
        <table>
          <tr>
            <th>Date of birth: </th>
            <td>{birthDate.toDateString()}</td>
          </tr>
          <tr>
            <th>Gender: </th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>Height: </th>
            <td>{height}</td>
          </tr>
          <tr>
            <th>City: </th>
            <td>{city}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserCard;
