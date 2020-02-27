import React from 'react';

const Secondfor = props => {
  return (
    <div className="teamplayers">
      {props.teamplayer.map(teamplayer => (
        <div
          className="note"
          style={{ border: 'solid black 5px', maxWidth: '40%', backgroundColor: '#F5F5DC' }}
          key={teamplayer.id}
        >
          <h2>{teamplayer.name}</h2>

          <h4>contact: {teamplayer.email}</h4>

          <h4>-{teamplayer.role}-</h4>
        </div>
      ))}
    </div>
  );
};

export default Secondfor;
