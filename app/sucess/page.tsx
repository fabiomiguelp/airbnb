'use client';
import { useRouter } from 'next/router';
import Button from '@/app/components/Button';
import Heading from '@/app/components/Heading';



const SucessPage = () => {


    return (
        <div 
        className="
          h-[60vh]
          flex 
          flex-col 
          gap-2 
          justify-center 
          items-center 
        "
      >
        <Heading
          center
          title={"Thank you for your reservation"}
          subtitle={"We will contact you soon"}
          contact='Contact us: +351 91 46 99 791'
          email='Email: cozyrghouse@gmail.com'
          whattsapp='Whatsapp: +351 91 46 99 791'
          back={true}


        />
        <div className="w-48 mt-4">

        </div>
      </div>
    );
    }

export default SucessPage;