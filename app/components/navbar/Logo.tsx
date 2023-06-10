'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return ( 
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer" 
      src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686422356/logo_njoo3t.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;
