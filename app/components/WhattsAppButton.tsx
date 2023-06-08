import React from 'react';
import { FaFontAwesome } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber }) => {
  const handleClick = () => {
    const message = 'Hello, I have a question.';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <button onClick={handleClick}>
      <FaWhatsapp color='#25D366' size={50} />
      
    </button>
  );
};

export default WhatsAppButton;
