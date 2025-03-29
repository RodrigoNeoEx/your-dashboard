"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button"
import GlassCard from "@/components/cards/GlassCard";
import ContainerPage from "@/components/containers/ContainerPage";



const Home = () => {
  const router = useRouter();

  return (
      <ContainerPage className="grid sm:grid-cols-2 grid-cols-1 items-start justify-items-center pt-20 bg-[image:var(--color-background-grad)] relative z-0">
      <Image
        src="/bgVetorizado2.png"
        alt="Background"
        fill
        priority
        loading="eager"  
        className="sm:object-contain sm:object-right-top absolute h-screen w-full object-cover object-[40%]" 
      />    
        {/* <div 
        className="flex flex-col items-center justify-center space-y-8 backdrop-blur-[10px] p-5 rounded-3xl mt-8 dark:bg-[#f0ffff94] shadow [--tw-shadow:var(--shadow)]
"> */}
          <GlassCard 
            title="Welcome to Your Dashboard Creator" 
            description="" 
            content="Build, customize, and organize your dashboards and KPIs however you want. Choose layouts, define metrics, and create different views for each objective — all in one place." 
            footer="Signin or Register to Start to Use."
            cardClass="max-w-[90%]"
            headerClass=""
            titleClass=""
            descriptionClass=""
            contentClass=""
            footerClass=""           
          >
            <div className="flex!important w-full justify-evenly!impotant">
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
          </GlassCard>



          {/* <h1 className="text-4xl font-bold text-center text-black">
            Welcome to Your Dashboard Creator
          </h1>
          <span>
          Build, customize, and organize your dashboards and KPIs however you want. Choose layouts, define metrics, and create different views for each objective — all in one place.
          </span>

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
          </div> */}
        {/* </div> */}
      </ContainerPage>
  );
}

export default Home;

