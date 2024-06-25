import React from 'react';
import axios from 'axios';

const ClaimYield = () => {
  const handleClaimYield = async () => {
    try {
      const response = await axios.post('/api/claim_yield');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Claim Yield</h2>
      <button onClick={handleClaimYield}>Claim Yield</button>
    </div>
  );
};

export default ClaimYield;
