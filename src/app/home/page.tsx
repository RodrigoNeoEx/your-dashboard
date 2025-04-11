import ContainerPage from "@/components/containers/ContainerPage"
import Header from "@/components/header/Header";

const Home = () => {
  return (
    <ContainerPage className="bg-[image:var(--color-background-grad)]">
      <Header />
      <div>Good Night World</div>
    </ContainerPage>
  )
}

export default Home;