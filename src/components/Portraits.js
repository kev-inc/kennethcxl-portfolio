import ThreeByTwo from "./frames/3by2";
import FourByFive from "./frames/4by5";

const Portraits = () => (
  <div>
    <h3 className="is-size-3">portraits</h3>
    <div className="tile is-ancestor is-vertical">
      <div className="tile is-parent">
        <article className="tile is-child">
          <FourByFive />
        </article>
        <article className="tile is-child">
          <FourByFive />
        </article>
        <article className="tile is-child">
          <FourByFive />
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child">
          <ThreeByTwo />
        </article>
        <article className="tile is-child">
          <ThreeByTwo />
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child">
          <ThreeByTwo />
        </article>
        <article className="tile is-child">
          <ThreeByTwo />
        </article>
        <article className="tile is-child">
          <ThreeByTwo />
        </article>
        <article className="tile is-child">
          <ThreeByTwo />
        </article>
      </div>
    </div>
  </div>
);

export default Portraits;
