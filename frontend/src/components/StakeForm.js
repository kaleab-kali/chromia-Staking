import React, { useState } from 'react';
import axios from 'axios';

const StakeForm = () => {
  const [amount, setAmount] = useState('');

  const handleStake = async () => {
    try {
      const response = await axios.post('/api/stake', { amount });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Stake Tokens</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleStake}>Stake</button>
    </div>
  );
};

export default StakeForm;
