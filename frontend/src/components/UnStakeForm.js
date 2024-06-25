import React, { useState } from 'react';
import axios from 'axios';

const UnstakeForm = () => {
  const [amount, setAmount] = useState('');

  const handleUnstake = async () => {
    try {
      const response = await axios.post('/api/unstake', { amount });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Unstake Tokens</h2>
      <button onClick={handleUnstake}>Unstake</button>
    </div>
  );
};

export default UnstakeForm;
