import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () =>{
  const [referrals, setReferrals] = useState([]);
  const [earnings, setEarnings] = useState(0);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(`/api/referrals/${userID}`);
  //     setReferrals(response.data);
  //     const earningsResponse = await axios.get(`/api/earnings/${userID}`);
  //     setEarnings(earningsResponse.data);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      {/* <h2>Your Referral ID is: {referralID}</h2>
      <h2>Your Earnings: {earnings}</h2>
      <h3>Referral History:</h3>
      <ul>
        {referrals.map((referral) => (
          <li key={referral._id}>{referral.name} ({referral.email})</li>
        ))}
      </ul> */}
    </div>
  );
}

export default Dashboard
