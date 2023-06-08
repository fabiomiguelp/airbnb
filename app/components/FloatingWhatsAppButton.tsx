import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
}) => {
  const handleClick = () => {
    const message = 'Hello, I have a question.';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  };

  return (
    <div className="floating-whatsapp-button" onClick={handleClick}>
        <FaWhatsapp size={50} className='whatsapp-icon' />
    </div>
  );
};

export default FloatingWhatsAppButton;
