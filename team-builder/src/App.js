import React, { useState } from 'react';
import Builder from './components/form';
import Secondfor from './components/secondfor';
import './App.css';

function App() {
  const [teamplayer, setTeamplayer] = useState([
    {
      id: 1,
      name: 'David Shestopal',
      email: 'dshestopal@yahoo.com',
      role: 'Lead Engineer',
    },
  ]);

  const addNewTeamPlayer = player => {
    const newTeamPlayer = {
      id: Date.now(),
      name: player.name,
      email: player.email,
      role: player.role,
    };
    setTeamplayer([...teamplayer, newTeamPlayer]);
  };
  return (
    <div className="App">
      <h1> Team Players</h1>
      <Builder addNewTeamPlayer={addNewTeamPlayer} />
      <Secondfor teamplayer={teamplayer} />
    </div>
  );
}
export default App;
