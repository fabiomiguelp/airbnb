import { NextResponse } from "next/server";

import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

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

   if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error();
  }

  const listingAndReservation = await prisma.listing.update({
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
