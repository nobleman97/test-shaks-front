

import React from 'react';

interface SignupThankYouEmailProps {
  name: string; // User's name
}

const SignupThankYouEmail: React.FC<SignupThankYouEmailProps> = ({ name }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <h1>Thank You for Signing Up, {name}!</h1>
      <p>We're excited to have you on board. Welcome to Shakazu!</p>
      <p>Your journey to more sales and profit starts here. We're here to support you every step of the way.</p>
      <p>If you have any questions or need assistance, feel free to reach out to our support team at contact@shakazu.com.</p>
      <p>Warm regards,</p>
      <p>The Shakazu Team</p>
    </div>
  );
};

export default SignupThankYouEmail;
