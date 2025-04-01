"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GlassCard from "@/components/cards/GlassCard";
import ContainerPage from "@/components/containers/ContainerPage";
import LoginButtons from "@/components/buttons/loginButtons";
import DefaultModal from "@/components/modals/DefaultModal";



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
      <GlassCard 
        title="Welcome to Your Dashboard Creator" 
        content="Build, customize, and organize your dashboards and KPIs however you want. Choose layouts, define metrics, and create different views for each objective — all in one place." 
        footer="Signin or Register to Start to Use."
        cardClass="max-w-[90%]"
        descriptionClass=""
        contentClass="font-bold"
        footerClass="font-weight-500 text-primary"           
      >
          <LoginButtons
            btn1="Login"
            btn2="Register"
            fn1={() => console.log('teste')}
            fn2={() => console.log('teste')} 
            btn1Class="min-w-[8rem] bg-[#184e7e] dark:text-white" 
            btn2Class="min-w-[8rem] bg-[#184e7e] dark:text-white" 
          />

      </GlassCard>        
    </ContainerPage>
  );
}

export default Home;

