'use client';

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";

import Heading from "../Heading";
// Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return ( 
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full overflow-hidden"
      >
        {/* OLD IMAGE */}
        {/*<Image
          src={imageSrc}
          fill
          className="object-cover w-full"
          alt="Image"
  />*/}
  <div className="carouselContainer">
            <Carousel swipeScrollTolerance={30} swipeable={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={500} showArrows={false} >
      <div className="carouselImage">
        <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686414447/1_dracwo.jpg" alt="" />
      </div>
      <div className="carouselImage">
      <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686414447/2_ycgv2v.jpg" alt="" />
      </div>
      <div className="carouselImage">
      <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686414447/3_q1muoc.jpg" alt="" />
      </div>
      <div className="carouselImage">
      <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686414447/4_digeji.jpg" alt="" />
      </div>
      <div className="carouselImage">
      <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686414447/5_v8xd6u.jpg" alt="" />
      </div>
      <div className="carouselImage">
      <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686415888/72_mm8tbf.jpg" alt="" />
      </div>
      <div className="carouselImage">
      <img src="https://res.cloudinary.com/dll9oq2kl/image/upload/v1686416021/82_p7k45k.jpg" alt="" />
      </div>
    </Carousel>
    </div>

        <div
          className="
            absolute
            top-5
            right-5
          "
        >

        </div>
      </div>
    </>
   );
}
 
export default ListingHead;