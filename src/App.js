import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './animation.css'
import NavigationBar from './components/NavigationBar.js'
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import ReferencePage from './components/ReferencePage.js'
import Container from 'react-bootstrap/Container'

import React, {useState} from 'react'

export const ReferenceContext = React.createContext(undefined);

function App() {

  const [references] = useState([{id: 0, referenceTitle: 'React', referenceSections: [{id: 0, sectionTitle: 'Getting started', path: 'react-reference/GettingStarted'}, {id: 1, sectionTitle: 'Context API', path: 'react-reference/ContextAPI'}, {id: 2, sectionTitle: 'Deploying', path: 'react-reference/Deployement'}, {id: 3, sectionTitle: 'Routing', path: 'react-reference/Router'}]}, 
{id: 1, referenceTitle: 'Python', referenceSections: [{id: 0, sectionTitle: 'Py Plot', path: 'python-reference/PyPlot'}]}])
  const [carouselItems] = useState([{title: 'React reference', description: 'A Javascript framework for reactive webpages', imagePath: 'images/ReactCarousel.jpg', clickPath: '/reference', referenceId: 0, sectionId: 0, id: 0},
{title: 'Bootstrap reference', description: 'The most famous CSS JS library', imagePath: 'images/BootstrapCarousel.jpg', clickPath: '/reference', referenceId: 1, sectionId: 0, id: 1}])
  const [currentReference, changeCurrentReference] = useState(0)
  const [currentSection, changeCurrentSection] = useState(0)

  return (
    <div className="App">
      <ReferenceContext.Provider value = {{references: references, changeCurrentReference: changeCurrentReference, currentReferenceId: currentReference, currentSectionId: currentSection, changeCurrentSection: changeCurrentSection}}>
          <Router basename = {process.env.PUBLIC_URL}>
            <header className="App-header">
              <NavigationBar/>
            </header>
            <div>
              <Container fluid>
                <Switch>
                  <Route path = '/about'><About/></Route>
                  <Route path = '/reference'><ReferencePage/></Route>
                  <Route path = '/'><Home carouselItems = {carouselItems}/></Route>
                </Switch>  
              </Container>
            </div>
          </Router>
      </ReferenceContext.Provider>
    </div>
  );
}

export default App;
