import React from 'react';

import { Match } from '../../store/dashboard';
import './MatchCard.css';

const UserCard = (props: { match: Match }) => {
  const { against, date, partner, result } = props.match;
  return (
    <div className="match card">
      <div className="card-header">{date.toLocaleString()}</div>
      <div className="card-body">
        <table>
          <tr>
            <th>
              <span className="you">YOU</span>
              {` - ${partner}`}
            </th>
            {result.map((set) => (
              <td>{set![0]}</td>
            ))}
          </tr>
          <tr>
            <th>{against.join(' - ')}</th>
            {result.map((set) => (
              <td>{set![1]}</td>
            ))}
          </tr>
        </table>
      </div>
    </div>
  );
};

export default UserCard;
