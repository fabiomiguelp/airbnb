import { SafeUser } from "@/app/types";
import Logo from "./Logo";


const Navbar = () => {
  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm items-center px-5 py-2">
     <Logo />

  </div>
  );
}


export default Navbar;