'use server';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import e from 'express';
import PatientForm from '@/components/Forms/PatientForm';
import AppointmentForm from '@/components/Forms/AppointmentForm';
import { getPatient } from '@/lib/actions/patient.actions';
import * as Sentry from '@sentry/nextjs'
 export default async function NewAppointment({params:{userId}}:SearchParamProps) {
  const patient = await getPatient(userId);
  Sentry.metrics.set("user_view_new-appointment", patient.name);
  return (
    <div className="flex h-screen max-h-screen">
 <section className="remove-scroll container my-auto">
<div className="sub-container max-w-[860px] flex-1 justify-between">
  <Image src="/assets/icons/logo-full.svg"
height={1000}
width={1000}
alt="patient"
className="mb-12 h-10 w-fit"/>
       <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

<div className='text-14-regular mt-20 flex justify-between'>
<p className='justify-items-end text-dark-600 xl:text-left'> © 2024 Carepulse  </p>
<Link href= "/?admin=true" className="text-green-500">admin</Link>
</div>
</div>
</section>
<Image
src="/assets/images/appointment-img.png"
height={1000}
width={1000}
alt = "patient"
className="side-img max-w-[50%]"/>
</div>)
}


