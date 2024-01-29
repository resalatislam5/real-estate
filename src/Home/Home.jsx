import Header from "../Header/Header";
import Banner from "./Banner";
import Choose from "./Choose";
import Discover from "./Discover";
import Properties from "./Properties";
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
    </div>
  );
}

export default Home;
