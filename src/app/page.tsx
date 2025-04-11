"use client";
import Image from "next/image";
import GlassCard from "@/components/cards/GlassCard";
import ContainerPage from "@/components/containers/ContainerPage";
import LoginButtons from "@/components/buttons/loginButtons";
import { ModalProvider } from "@/context/modals/ModalsProvider";
import { Suspense } from "react";
import Header from "@/components/header/Header";

import React from "react";

const Home = () => {

  return (
    <React.Fragment>
      <Suspense fallback={null}>
        <Header />
      </Suspense>
      <ContainerPage className="grid 2xl:grid-cols-2 grid-cols-1 items-start 2xl:items-center justify-items-center pt-20 bg-[image:var(--color-background-grad)] relative z-0">
        <Image
          src="/bgVetorizado2.png"
          alt="Background"
          fill
          priority
          loading="eager"  
          className="sm:object-contain absolute h-screen w-full object-cover object-[40%] xl:object-[85%] " 
        />  
        <GlassCard 
          title="Welcome to Your Dashboard Creator" 
          content="Build, customize, and organize your dashboards and KPIs however you want. Choose layouts, define metrics, and create different views for each objective — all in one place." 
          footer="Signin or Register to Start to Use."
          cardClass="max-w-[90%] dark:bg-[#184e7e40] bg-[#bad8f16e] lg:max-w-[80%] lg:flex lg:justify-around h-auto 2xl:min-h-[50vh] 2xl:max-w-[70%] 2xl:relative 2xl:bottom-[10%]"
          titleClass=" md:text-[1.75rem] lg:text-[2rem] 2xl:text-[2.5rem]"
          contentClass="font-bold md:text-center md:text-[1.5rem] md:leading-[2rem] 2xl:text-[1.75rem] 2xl:font-normal"
          footerClass="font-weight-500 text-primary md:text-[1.5rem]"           
        >
          <ModalProvider>
            <LoginButtons
              btn1="Go to your Dashboard"
              btn2="Register"
              btnClass="min-w-[40%] h-auto sm:text-[1.25rem] 2xl:text-[1.75rem] bg-[#bad8f1] text-[#184e7e] border-[#184e7e] border-2 dark:text-white dark:bg-[#184e7e] hover:text-white "
            />
          </ModalProvider>
        </GlassCard>              
      </ContainerPage>
    </React.Fragment>
  );
}

export default Home;

