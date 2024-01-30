import Header from "../Header/Header";
import Agents from "./Agents";
import Banner from "./Banner";
import Blog from "./Blog";
import Choose from "./Choose";
import Cities from "./Cities";
import Cta from "./Cta";
import Discover from "./Discover";
import Properties from "./Properties";
import Rent from "./Rent";
import Testimonials from "./Testimonials";
import Trends from "./Trends";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Discover />
      <Choose />
      <Properties />
      <Trends />
      <Rent />
      <Testimonials />
      <Cities />
      <Agents />
      <Blog />
      <Cta />
    </div>
  );
}

export default Home;
