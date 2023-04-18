import 'animate.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Exchange from './components/Exchange';
import { default as Features } from './components/Features';
import Layout from './components/Layout';
import LeaderBoard from './components/LeaderBoard';
import Perpetual from './components/Perpetual';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
        index
          element={<Dashboard/>}
        />
        <Route path="features" element={<Features />} />
        <Route path="exchange" element={<Exchange />} />
        <Route path="leaderboard" element={<LeaderBoard />} />
        <Route path="perpetual" element={<Perpetual />} />
      </Route>
    </Routes>
  )
}

