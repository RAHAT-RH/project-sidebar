import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Products from './components/Products/Products';

function App() {
  return (
  <div>
    {/* <Products></Products> */}
      <Router>
      <Sidebar/>
       <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route exact path="/overview">
            <Overview/>
          </Route>
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
