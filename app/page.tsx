import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import e from 'express';
import {DataTable} from '../components/table/DataTable';

import PatientForm from '@/components/Forms/PatientForm';
import PassKeyModal from '@/components/PassKeyModal';

export default function Home({ searchParams }: SearchParamProps) {
  const isAdmin = searchParams.admin === 'true';

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal />}

      <Image
        src="/assets/images/onboarding-img.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%] float-left"
      />

      <section className="remove-scroll container my-auto flex-grow">
        <div className="sub-container max-w-[496px]">
          <Image 
            src="/assets/icons/logo-full.svg"
            height={900}
            width={900}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className='text-14-regular mt-20 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>© 2024 Carepulse</p>
            <Link href="/?admin=true" className="text-green-500">admin</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

