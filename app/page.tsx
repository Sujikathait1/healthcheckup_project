import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"; // Confirm if this is used
import { Section } from "lucide-react"; // Confirm if this is used
import PatientForm from '@/components/Forms/PatientForm';
import PassKeyModal from '@/components/PassKeyModal';

interface SearchParamProps {
  searchParams?: {
    admin?: string;
  };
}

export default function Home({ searchParams }: SearchParamProps) {
  // Determine if the 'admin' query parameter is set to "true"
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {/* Conditionally render the PassKeyModal */}
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
