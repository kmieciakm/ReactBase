import "./app.css";
import NavigationMenu from '../Navigation/NavigationMenu';
import Footer from '../Footer/Footer';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-container position-relative pb-5">
      <Router>
        <NavigationMenu/>
        <div className="mt-lg-3 ml-lg-3 mr-lg-3">
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/about">
                  <About />
              </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
