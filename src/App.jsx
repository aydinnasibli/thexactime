import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout'
import { Route } from 'react-router-dom'
import CustomRoute from './services/CustomRoute'
import Home from './pages/Home'
import HistoricalTimelines from '../src/pages/HistoricalTimelines'
import AnnualWorldwideEvents from './pages/AnnualWorldwideEvents'
import Calendars from './pages/Calendars'
import Timezones from './pages/TimeZones'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <CustomRoute>
          <Route path="/*" element={<Home />} />
          <Route path="/timezones" element={<Timezones />} />
          <Route path="/calendars" element={<Calendars />} />
          <Route path="/annualwwevents" element={<AnnualWorldwideEvents />} />

          <Route path="/historicaltimelines" element={<HistoricalTimelines />} />

        </CustomRoute>
      </Layout>


    </>
  )
}

export default App
