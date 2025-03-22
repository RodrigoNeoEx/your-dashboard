"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/customComponents/themeToggle/ThemeToggle";


const Home = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen w-full overflow-hidden">
   
      <Image
        src="/bgVetorizado.png"
        alt="Background"
        fill
        priority
        loading="eager"  
        className="sm:object-contain sm:object-right-top absolute h-screen w-full object-cover " 
      />

    
      <section className="relative z-10 flex items-center justify-center h-full">
      <ThemeToggle />
        <div className="grid sm:grid-cols-2 grid-cols-1 items-start justify-items-center h-screen p-8 mt-20 gap-16 sm:p-20">
          <div className="flex flex-col items-center justify-center space-y-4 backdrop-blur-[10px] sm:backdrop-blur-[0px] p-5 rounded-3xl">
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
        </div>
      </section>
    </div>
  );
}

export default Home;