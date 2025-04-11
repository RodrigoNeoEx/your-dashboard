// import ContainerContent from "@/components/containers/ContainerContent";
import ContainerContent from "@/components/containers/ContainerContent";
import ContainerPage from "@/components/containers/ContainerPage"
import Header from "@/components/header/Header";
import { DashboardNavigation } from "@/components/navitgation/DashboardNavigation";

const Home = () => {
  return (
    <ContainerPage className="bg-[image:var(--color-background-grad)]">
      <Header classname="relative"/>
    
      <ContainerContent classname="flex flex-col items-center justify-center w-full h-auto mt-2">    
        <h1>Choose your Dashboard or Create a new one</h1>
        <DashboardNavigation />
      </ContainerContent>
    </ContainerPage>
  )
}

export default Home;