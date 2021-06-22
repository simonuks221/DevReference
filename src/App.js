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

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <NavigationBar/>
        </header>
        <body>
          <Container fluid>
            <Switch>
              <Route path = '/about'><About/></Route>
              <Route path = '/react-reference'><ReferencePage/></Route>
              <Route path = '/'><Home/></Route>
            </Switch>   
          </Container>
        </body>
      </Router>
    </div>
  );
}

export default App;
