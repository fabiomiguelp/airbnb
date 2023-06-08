'use client';

import WhatsAppButton from "./WhattsAppButton";
import { useRouter } from 'next/navigation';
import Button from '@/app/components/Button';

interface HeadingProps {
  title: string;
  subtitle?: string;
  contact?: string;
  center?: boolean;
  whattsapp?: string;
  email?: string;
  back?: boolean;

}

const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
  contact,
  center,
  whattsapp,
  email,
  back

}) => {
  const router = useRouter();
  return ( 
    <div className={center ? 'text-center' : 'text-start'}>
      <div className="text-2xl font-bold">
        {title}
      </div>
      <div className="font-light text-neutral-500 mt-2">
        {subtitle}
      </div>
      <div className="font-light text-neutral-500 mt-2">
        {contact}
  

          
        

      </div>
      <div className="font-light text-neutral-500 mt-2">
        {email}
      </div>
      <br/>
      {whattsapp && <div><WhatsAppButton phoneNumber={whattsapp} /></div>}
      <br/>
      {back && <div>
        <Button
            outline
            label="Go back"
            onClick={() => router.push('/')}
          />
        
        </div>}


    </div>
   );
}
 
export default Heading;