import { Routes, Route } from 'react-router-dom'
import LockedInLogin    from './components/LockedInLogin/LockedInLogin'
import Signup           from './components/LockedInSignup/Signup'
import ForgotPassword   from './components/LockedInSignup/ForgotPassword'
import Dashboard        from './components/Dashboard/Dashboard'
import Analytics        from './components/Analytics/Analytics'
import Messaging        from './components/Messaging/Messaging'
import Feed             from './components/Feed/Feed'
import Settings         from './components/Settings/Settings'

function App() {
  return (
    <Routes>
      <Route path="/"               element={<LockedInLogin />} />
      <Route path="/login"          element={<LockedInLogin />} />
      <Route path="/signup"         element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard"      element={<Feed />} />
      <Route path="/careers"        element={<Dashboard />} />
      <Route path="/analytics"      element={<Analytics />} />
      <Route path="/messaging"      element={<Messaging />} />
      <Route path="/feed"           element={<Feed />} />
      <Route path="/settings"       element={<Settings />} />
    </Routes>
  )
}

export default App