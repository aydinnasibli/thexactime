import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CustomRoute from './services/CustomRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout>
        <CustomRoute>
          <Route path="/*" element={<div><Home /></div>} />

          <Route path="/calendars" element={<div className='text-center'>Calendars</div>} />
          <Route path="/annualwwevents" element={<div className='text-center'>Annual</div>} />
          <Route path="/timezones" element={<div className='text-center'>Timezones</div>} />
          <Route path="/historicaltimelines" element={<div className='text-center'>Historical Timelines</div>} />


        </CustomRoute>
      </Layout>
    </>
  )
}

export default App
