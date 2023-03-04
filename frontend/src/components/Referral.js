import React, { useState } from 'react';
import axios from 'axios';

function Referral() {
  const [referralID, setReferralID] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/referral', { referralID });
    // Display a success message to the user
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Referral ID" value={referralID} onChange={(e) => setReferralID(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Referral