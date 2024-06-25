import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StakeForm from './components/StakeForm';
import UnstakeForm from './components/UnStakeForm';
import ClaimYield from './components/ClaimYield';

const App = () => {
  return (
    <div className="container">
      <h1>Chromia Staking Protocol</h1>
      <StakeForm />
      <br />
      <UnstakeForm />
      <ClaimYield />
    </div>
  );
};

export default App;
