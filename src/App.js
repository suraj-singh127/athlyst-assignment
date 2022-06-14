import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/MatchForm/MatchForm';
import Navbar from './components/Navbar/Navbar';


function App() {
return (
    <div className="entirePage">
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
      );
}

export default App;
