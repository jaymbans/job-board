import './style.css';
import { Routes, Route, Link } from 'react-router-dom';
import JobBoard from './components/JobBoard'
import Login from './components/Login'
import JobDetails from './components/JobDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
