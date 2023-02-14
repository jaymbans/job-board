import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import JobBoard from './components/JobBoard'
import Login from './components/Login'
import JobDetails from './components/JobDetails';
import Jobs from './jobs'




function App() {
  const navigate = useNavigate();

  const [jobsData, setJobsData] = useState(Jobs);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    loggedIn && navigate('/jobs')
  }, [loggedIn])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
