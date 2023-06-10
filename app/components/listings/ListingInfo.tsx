'use client';

import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import {MdOutlineLocalLaundryService} from "react-icons/md";

import {AiOutlineCar, AiOutlineWifi} from "react-icons/ai";
import {GiFlowerPot,GiForkKnifeSpoon,GiCookingPot} from "react-icons/gi";
import {BiFridge} from "react-icons/bi";
import {AiOutlineCoffee} from "react-icons/ai";
import {TbMicrowave,TbCooker,TbSofa} from "react-icons/tb";
import {BsBasket} from "react-icons/bs";
import {MdOutlineTableBar,MdTv} from "react-icons/md";
import {MdOutlineBed} from "react-icons/md";



import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";




const Map = dynamic(() => import('../Map'), { 
  ssr: false 
});

interface ListingInfoProps {
  user: SafeUser,
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category: {
    icon: IconType,
    label: string;
    description: string;
  } | undefined
  locationValue: string;
}




const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng
  console.log(coordinates)
  console.log(locationValue)

  return ( 
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
            {guestCount} guests
          </div>
          <div>
            {roomCount} rooms
          </div>
          <div>
            {bathroomCount} bathrooms
          </div>
        </div>
        
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon} 
          label={category?.label}
          description={category?.description} 
        />
      )}

      <hr />

      <div className="
      text-lg font-light text-neutral-500">
        {description}
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Where will you sleep</div>

        </div>
        <div className="
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          "
        >
          <div>
<MdOutlineBed size={45} />
<span>1 Double Bedroom</span>
          </div>
          <div>
           <TbSofa size={45} />
            <span>1 Double Sofa Bed</span>
          </div>

        </div>
        
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>What this place offers</div>

        </div>

        <div className="grid grid-cols-2 gap-4            
           items-center 
            gap-4 
            font-light
            text-neutral-500">
            <div className="p-4">

            <MdOutlineLocalLaundryService size={45} />
            <span>Washing Machine</span>
            <GiForkKnifeSpoon size={45} />
            <span>Kitchen utensils</span>
            <GiCookingPot size={45} />
            <span>Cooking basics</span>
            <AiOutlineWifi size={45} />
            <span>Wifi</span>
            <AiOutlineCar size={45} />
            <span>Free parking</span>

            <GiFlowerPot size={45} />
            <span>Backyard</span>

         






        </div>
  <div className="p-4">


  <BiFridge size={45} />
            <span>Fridge</span>
          
            <AiOutlineCoffee size={45} />
            <span>Coffee Machine</span>
        
            <TbMicrowave size={45} />
            <span>Microwave</span>
          
            <TbCooker size={45} />
            <span>Stove</span>
      
            <BsBasket size={45} />
            <span>Welcome Basket</span>

            <MdTv size={45} />
            <span>TV</span>
         
















  </div>
</div>


        
      </div>
      <hr />
      <div 
          className="
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          "
        >
          <div>Location</div>
          

        </div>
        <div>Ribeira Grande, São Miguel, Azores</div>
        <div> 20 minutes from the airport, 10 minutes from Lagoa do Fogo, 2 minutes from the beach, 2 minutes from the city center </div>
       

      <Map center={coordinates} />
    </div>
   );
}
 
export default ListingInfo;