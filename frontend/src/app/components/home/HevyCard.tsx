import Image from 'next/image';
import Link from 'next/link';

export default function HevyCard() {
  return (
    <section className="flex flex-col gap-10 card px-10 py-10 bg-[#000000] w-full items-center">
      <Image 
        src="/logos/hevy.png" 
        alt="LinkedIn" 
        width={50} 
        height={50} 
        className="h-50 w-50 rounded-2xl object-contain" 
      />

      <Link 
        href="https://hevy.com/user/ryanwong" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex flex-wrap justify-center gap-5 w-full hover:underline py-5"
      >
        <h2 className="text-xl font-semibold">
          Follow My Workout Progress
        </h2>
      </Link>
    </section>
  );
}