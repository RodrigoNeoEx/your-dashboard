"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button"



const Home = () => {
  const router = useRouter();

  return (
      <section className="grid sm:grid-cols-2 grid-cols-1 items-start justify-items-center h-screen p-8 gap-16 sm:p-20 bg-[image:var(--color-background-grad)] relative w-full overflow-hidden z-0">
      <Image
        src="/bgVetorizado2.png"
        alt="Background"
        fill
        priority
        loading="eager"  
        className="sm:object-contain sm:object-right-top absolute h-screen w-full object-cover object-[40%]" 
      />    
        <div 
        className="flex flex-col items-center justify-center space-y-8 backdrop-blur-[10px] p-5 rounded-3xl mt-8 dark:bg-[#f0ffff94] shadow [--tw-shadow:var(--shadow)]
">
          <h1 className="text-4xl font-bold text-center text-black">
            Welcome to Your Dashboard Creator
          </h1>
          <p className="text-lg text-center text-black">
            Signin or Register to Start to Use.
          </p>
          <div className="flex w-full justify-evenly">
            <Button
              variant="outline"
              className="px-4 py-2 text-white bg-[#2c7aaf] rounded-md min-w-40"
            >
              Signin
            </Button>
            <Button 
              variant="outline"
              className="px-4 py-2 text-white bg-[#2c7aaf] rounded-md min-w-40"
            >
              Register
            </Button>
          </div>
        </div>
      </section>
  );
}

export default Home;