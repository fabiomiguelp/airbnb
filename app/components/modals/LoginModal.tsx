'use client';

import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { 
  FieldValues, 
  SubmitHandler, 
  useForm
} from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Input from "../inputs/Input";
import Heading from "../Heading";





const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { totalPrice, dateRange, listingId } = useLoginModal();
  console.log(dateRange)



  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);









  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      guests: 1,
      listingId: listingId,

    },
  });
  
  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {

    const { email, name, phone, guests } = data;


    setIsLoading(true);


    axios.post('/api/reservations', {
      totalPrice: totalPrice,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      listingId: "64820607a52f372967c555f7",
      name: name,
      email: email,
      phone: phone,
      guests: parseInt(guests),
    })
    .then(() => {
      toast.success('Listing reserved!');
      loginModal.setSuccess(true);
      router.push(`/sucess`);
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
      loginModal.onClose();

    })




/*
    signIn('credentials', { 
      ...data, 
      redirect: false,
    })
    .then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Logged in');
        router.refresh();
        loginModal.onClose();
      }
      
      if (callback?.error) {
        toast.error(callback.error);
      }
    });*/
  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Enter your details"
        subtitle="Please enter your details to confirm your reservation, payment will be made at the property."
      />
                  <Input
        id="name"
        label="Name"
        type="text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}  
        errors={errors}
        required
      />


                  <Input
        id="phone"
        label="Phone"
        type="text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
       id="guests"
        label="Guests (max 4)"
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        defaultValue={1}
        required
      />

      
    </div>
  )



  return (

      <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Details"
      actionLabel="CONFIRM RESERVATION"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}

    />


  );
}

export default LoginModal;
