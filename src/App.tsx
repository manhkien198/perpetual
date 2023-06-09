import 'animate.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Exchange from './components/Exchange';
import { default as Features } from './components/Features';
import Layout from './components/Layout';
import LeaderBoard from './components/LeaderBoard';
import Perpetual from './components/Perpetual';
import Overview from './components/Overview';
import History from './components/History';
import Markets from './components/Markets';
import Staking from './components/Staking';
import { useEffect } from 'react';

export default function App() {
  const navigate=useNavigate()
  const location = useLocation()
  const path=location.pathname
  useEffect(()=>{
    if(path==='/'){
      navigate('/dashboard')
    }
  },[path,navigate])
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path='history' element={<History />} />
          <Route path='markets' element={<Markets />} />
          <Route path='staking' element={<Staking />} />
        </Route>
        <Route path='features' element={<Features />} />
        <Route path='exchange' element={<Exchange />} />
        <Route path='leaderboard' element={<LeaderBoard />} />
        <Route path='perpetual' element={<Perpetual />} />
      </Route>
    </Routes>
  );
}
