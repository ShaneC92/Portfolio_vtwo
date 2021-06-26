import './App.css';

import {Switch, Route} from 'react-router-dom';

import Nav from './components/NavBar/Nav';
import Contact from './components/ContactMe/contactMe';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path='/' component={ AboutMe } />
        <Route path='/projects' component={ Projects } />
        <Route path='/contactme' component={ Contact } />
      </Switch>
    </div>
  );
}

export default App;
