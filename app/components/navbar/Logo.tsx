'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686422356/logo_njoo3t.png" 
      height="200"
      width="200" 
      alt="Logo" 
      className="cursor-pointer pt-2 pb-2 items-center"
    />
   );
}
 
export default Logo;
