import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OutWork from './pages/OutWork';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import MovieDetail from './pages/MovieDetail';
//Router
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import D3js from './pages/D3js';

function App() {
  const location = useLocation();
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <AboutUs />
          </Route>
          <Route path='/work' exact>
            <OutWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/contact'>
            <ContactUs />
          </Route>
          <Route path='/D3js'>
            <D3js />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
