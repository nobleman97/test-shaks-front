import React from 'react';

interface ThankYouEmailProps {
  customerName: string;
  yourName: string;
  yourPosition: string;

}

const ThankYouEmail: React.FC<ThankYouEmailProps> = ({ 
  customerName,  
  yourName, 
  yourPosition, 

}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
      maxWidth: '600px',
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h1>Thank You for Reaching Out to Us!</h1>
      <p>Dear {customerName},</p>
      <p>I hope this email finds you well. We wanted to extend a heartfelt thank you for reaching out to Shakazu.</p> 
      <p>Your inquiry is very important to us, and we are thrilled to have the opportunity to assist you.</p>
      <p>Our team reach out swiftly as possible. Your satisfaction and trust in our services are our top priorities.</p>
      <p>Should you have any more questions or require immediate assistance, please do not hesitate to contact us at contact@shakazu.com. We're here to help!</p>
      <p>Thank you once again for choosing Shakazu. We look forward to serving you and are excited to assist with your needs.</p>
      <div style={{marginTop: '30px', fontSize: '14px'}}>
        Warm regards,<br/>
        {yourName}<br/>
        {yourPosition}<br/>
        Shakazu LLC<br/>
      </div>
    </div>
  );
};

export default ThankYouEmail;
