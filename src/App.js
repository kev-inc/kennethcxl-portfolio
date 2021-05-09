import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Clients from "./components/tsl/Clients";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portraits from "./components/Portraits";
import TslVideos from "./components/tsl/Videos";
import Videos from "./components/Videos";
import "./styles.css";
import Editorials from "./components/tsl/Editorials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/photos" component={Portraits} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/tsl/videos" component={TslVideos} />
          <Route exact path="/tsl/clients" component={Clients} />
          <Route exact path="/tsl/editorials" component={Editorials} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
