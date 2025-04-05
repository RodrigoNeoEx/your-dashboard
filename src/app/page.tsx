"use client";
import Image from "next/image";
import GlassCard from "@/components/cards/GlassCard";
import ContainerPage from "@/components/containers/ContainerPage";
import LoginButtons from "@/components/buttons/loginButtons";
import { ModalProvider } from "@/context/modals/ModalsProvider";

const Home = () => {

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
      <GlassCard 
        title="Welcome to Your Dashboard Creator" 
        content="Build, customize, and organize your dashboards and KPIs however you want. Choose layouts, define metrics, and create different views for each objective — all in one place." 
        footer="Signin or Register to Start to Use."
        cardClass="max-w-[90%] dark:bg-[#184e7e40] bg-[#bad8f16e]"
        descriptionClass=""
        contentClass="font-bold"
        footerClass="font-weight-500 text-primary"           
      >
        <ModalProvider>
          <LoginButtons
            btn1="Login"
            btn2="Register"
            btn1Class="min-w-[8rem] bg-[#bad8f1] text-[#184e7e] border-[#184e7e] border-2 dark:text-white dark:bg-[#184e7e]" 
            btn2Class="min-w-[8rem] bg-[#bad8f1] text-[#184e7e] border-[#184e7e] border-2 dark:text-white dark:bg-[#184e7e]" 
          />
        </ModalProvider>
      </GlassCard>              
    </ContainerPage>
  );
}

export default Home;

