import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/MatchForm/MatchForm';
import Navbar from './components/Navbar/Navbar';
import MatchList from './Pages/MatchList/MatchList';


function App() {
return (
    <div className="entirePage">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/matchlist" element={<MatchList/>}/>
        </Routes>
      </Router>
    </div>
      );
}

export default App;
