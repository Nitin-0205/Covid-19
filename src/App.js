import {Switch,Route} from "react-router";
import Header from './components/Header';
import DashBtn from './components/DashBoardBtn';
import Home from './components/Home';
import About from './components/About';
import Intro from './components/Intro';
import Prevention from './components/Prevention';
import Symptoms from './components/Symptoms';
import Vaccine from './components/Vaccine';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Dash from './components/Covid_Dashboard';
import Error_Page from './components/Error';



import './index.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route>
          <Header />
          <Home />
          <About />
          <Intro />
          <Prevention />
          <Symptoms />
          <Vaccine />
          <Contact />
          <Footer />
          <DashBtn />
        </Route>
        <Route path = '/Dash' component={Dash}></Route>
        <Route component={Error_Page}></Route>

      </Switch>
    </div>
  );
}

export default App;
