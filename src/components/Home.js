import ThreeByTwo from "./frames/3by2";
import FourByFive from "./frames/4by5";

const Home = () => (
  <div class="columns">
    <div class="column">
      <ThreeByTwo />
      <FourByFive />
      <ThreeByTwo />
      <ThreeByTwo />
    </div>
    <div class="column">
      <FourByFive />
      <ThreeByTwo />
      <FourByFive />
      <ThreeByTwo />
    </div>
    <div class="column">
      <ThreeByTwo />
      <FourByFive />
      <ThreeByTwo />
      <FourByFive />
      <ThreeByTwo />
    </div>
    <div class="column">
      <ThreeByTwo />
      <ThreeByTwo />
      <FourByFive />
      <ThreeByTwo />
    </div>
  </div>
);

export default Home;
