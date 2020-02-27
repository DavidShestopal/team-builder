import React, { useState } from 'react';

const Builder = props => {
  console.log('props', props);
  const [teamplayer, setTeamplayer] = useState({
    name: '',
    email: '',
    role: '',
  });
  const handleChanges = e => {
    console.log(teamplayer);

    setTeamplayer({
      ...teamplayer,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeamPlayer(teamplayer);
    setTeamplayer({ name: '', email: '', role: '' });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" name="name" onChange={handleChanges} value={teamplayer.name} />
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" onChange={handleChanges} value={teamplayer.email} />
      <label htmlFor="role">Role:</label>
      <input id="role" name="role" onChange={handleChanges} value={teamplayer.role} />
      <div className="filler"></div>
      <button type="submit">Add Team Player</button>
    </form>
  );
};

export default Builder;
