import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import aboutus from "../About/index";
import contactus from "../Contactus/index";
import help from "../Help/index";
import Footer from "../Footer/index";

function Home() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome To Tylor Internet Private Service!!!</h1>
        <hr />
        <Switch>
        <Route path="/Aboutus" component={aboutus} />
        <Route path="/Contactus" component={contactus} />
        <Route path="/Help" component={help} />
        </Switch>
        <Footer />
        <p className="App-intro">
          <Link to="/aboutus">Aboutus</Link>
          <br />
          <Link to="/Contactus">ContactUs</Link>
          <br />
          <Link to="/Help">Help</Link>
          <hr />
        </p>
      </div>
    </BrowserRouter>
  );
}

export default Home;
