import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import Calendars from './pages/Calendars'
import TimeZones from './pages/TimeZones'

function App() {
  const location = useLocation()
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/*" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ opacity: { duration: 0.5, ease: "easeOut" }, x: { duration: 0.5, ease: "easeOut" } }}
              >
                <Home />
              </motion.div>
            } />

            <Route path="/calendars" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ opacity: { duration: 0.5, ease: "easeOut" }, x: { duration: 0.5, ease: "easeOut" } }}
              >
                <Calendars />
              </motion.div>
            } />

            <Route path="/annualwwevents" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ opacity: { duration: 0.5, ease: "easeOut" }, x: { duration: 0.5, ease: "easeOut" } }}
              >
                <div>Annual</div>
              </motion.div>
            } />

            <Route path="/timezones" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ opacity: { duration: 0.5, ease: "easeOut" }, x: { duration: 0.5, ease: "easeOut" } }}
              >
                <TimeZones />
              </motion.div>
            } />

            <Route path="/historicaltimelines" element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ opacity: { duration: 0.5, ease: "easeOut" }, x: { duration: 0.5, ease: "easeOut" } }}
              >
                <div>Historical</div>
              </motion.div>
            } />

          </Routes>
        </AnimatePresence>
      </Layout>
    </>
  )
}

export default App
