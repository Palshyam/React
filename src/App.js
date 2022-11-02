import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Skill from "./Pages/Skills/Skill";
import Timeline from "./Pages/Timeline/Timeline";
import Price from "./Pages/Price/Price";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact/Contact";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Skill" component={Skill} />
          <Route exact path="/Timeline" component={Timeline} />
          <Route exact path="/Price" component={Price} />
          <Route exact path="/News" component={News} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/PageNotFound" component={PageNotFound} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
