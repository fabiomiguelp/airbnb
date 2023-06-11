'use client';
import { useRouter } from 'next/router';
import Button from '@/app/components/Button';
import Heading from '@/app/components/Heading';
import useLoginModal from '@/app/hooks/useLoginModal';
import { log } from 'console';



const SucessPage = () => {

  const loginModal = useLoginModal();



    return (
      loginModal.success ? (
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
          email='Email: centralcharmazores@gmail.com'
          whattsapp='Whatsapp: +351 91 46 99 791'
          back={true}


        />
        <div className="w-48 mt-4">

        </div>
      </div>
    ) : (
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
          title={"Something went wrong"}
          subtitle={"Please try again"}
          contact='Contact us: +351 91 46 99 791'
          email='Email: centralcharmazores@gmail.com'
          whattsapp='Whatsapp: +351 91 46 99 791'
          back={true}
        />
                <div className="w-48 mt-4">

</div>
</div>
    )
    )
    }

export default SucessPage;