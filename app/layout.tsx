import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar';
import LoginModal from '@/app/components/modals/LoginModal';
import RegisterModal from '@/app/components/modals/RegisterModal';
import SearchModal from '@/app/components/modals/SearchModal';
import RentModal from '@/app/components/modals/RentModal';
import FloatingWhatsAppButton from '@/app/components/FloatingWhatsAppButton';
import useLoginModal from './hooks/useLoginModal';

import ToasterProvider from '@/app/providers/ToasterProvider';

import './globals.css'
import ClientOnly from './components/ClientOnly';
import getCurrentUser from './actions/getCurrentUser';

export const metadata = {
  title: 'Central Charm Azores',
  description: 'Airbnb',
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();





  return (
    <html lang="en">
      <body className={font.className}>
        <>

          <ToasterProvider />
          <LoginModal />
          <RegisterModal />


          <Navbar currentUser={currentUser} />
          </>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
