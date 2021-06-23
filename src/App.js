import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.js'
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import ReferencePage from './components/ReferencePage.js'
import Container from 'react-bootstrap/Container'

import React, {useState, useContext} from 'react'

export const ReferenceContext = React.createContext(undefined);

function App() {

  const [references, changeReferences] = useState([{id: 0, referenceTitle: 'React', referenceSections: [{id: 0, sectionTitle: 'Getting started', path: 'GettingStarted'}, {id: 1, sectionTitle: 'Context API', path: 'ContextAPI'}]}])
  const [currentReference, changeCurrentReference] = useState(0)
  const [currentSection, changeCurrentSection] = useState(0)

  return (
    <div className="App">
      <ReferenceContext.Provider value = {{references: references, changeCurrentReference: changeCurrentReference, currentReferenceId: currentReference, currentSection: currentSection, changeCurrentSection: changeCurrentSection}}>
          <Router>
            <header className="App-header">
              <NavigationBar/>
            </header>
            <div>
              <Container fluid>
                <Switch>
                  <Route path = '/about'><About/></Route>
                  <Route path = '/reference'><ReferencePage/></Route>
                  <Route path = '/'><Home/></Route>
                </Switch>  
              </Container>
            </div>
          </Router>
      </ReferenceContext.Provider>
    </div>
  );
}

export default App;
