import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedCollection from "../components/FeaturedCollections";
import Casualcollection from "../components/Casualcollection";
function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCollection />
      <Casualcollection/>
    </>
  );
}
export default Home;
