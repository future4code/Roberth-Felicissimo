import './App.css';
import Navbar from "./components/Navbar.jsx"
import Cardprofile from './components/Cardprofile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
   <>
    <Router>
      <Navbar />
      <Cardprofile />
      <Switch>
        <Route path="/" exact />
      </Switch>
    </Router>


   </>
  );
}

export default App;
