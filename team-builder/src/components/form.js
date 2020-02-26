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
    // console.log("the name", e.target.name)
    // console.log("the event target", e.target)
    //we are dynamically setting our keys.
    // setNote({ ...note, title: e.target.value });
    // setNote({ ...note, note: e.target.value });
    //  const nameObj={...note}
    //  nameObj[e.target.name]= e.target.value
    // setNote(nameObj)
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
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" onChange={handleChanges} value={teamplayer.name} />
      <label htmlFor="email">Email</label>
      <input id="email" name="email" onChange={handleChanges} value={teamplayer.email} />
      <label htmlFor="role">Role</label>
      <input id="role" name="role" onChange={handleChanges} value={teamplayer.role} />
      <button type="submit">Add Team Player</button>
    </form>
  );
};

export default Builder;
