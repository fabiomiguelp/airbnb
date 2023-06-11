import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { sendEmail } from "../sendmail/route";

export async function POST(
  request: Request, 
) {



  const body = await request.json();
  const { 
    listingId,
    startDate,
    endDate,
    totalPrice,
    name,
    email,
    phone,
    guests
   } = body;


   if (!listingId || !startDate || !endDate || !totalPrice || !name || !email || !phone || !guests) {
    return NextResponse.error();
  }

  const listingAndReservation = 


  





sendEmail(
 {
    to: email as string,
    from: 'centralcharmazores@gmail.com' as string,
    subject: 'Central Charm Azores - Reservation',
    text: `Hello ${name}, your reservation was successful!, we will contact you soon!
    Reservation details:
    Start Date: ${startDate}
    End Date: ${endDate}
    Guests: ${guests}
    Total Price: ${totalPrice} €
    Payment Method: Cash, on arrival
    `,
  })




    await prisma.listing.update({
    where: {
      id: listingId
    },
    data: {
      reservations: {
        create: {
          startDate,
          endDate,
          totalPrice,
          name,
          email,
          phone,
          guests,
        }
      }
    }
  });

  return NextResponse.json(listingAndReservation);
}
