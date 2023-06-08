import { type } from 'os';
import { create } from 'zustand';
import { Range } from "react-date-range";

interface LoginModalStore {
  isOpen: boolean;
  totalPrice: number;
  dateRange: Range;
  listingId: string;
  onOpen: () => void;
  onClose: () => void;
  setTotalPrice: (totalPrice: number) => void;
  setDateRange: (dateRange: Range) => void;


}



const useLoginModal = create<LoginModalStore>((set) => ({
  isOpen: false,
  totalPrice: 0,
  dateRange: [],
  listingId: '',
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setTotalPrice(totalPrice: number) {
    set({ totalPrice });
  },
  setDateRange(dateRange: Range) {
    set({ dateRange });
  },



}));


export default useLoginModal;
