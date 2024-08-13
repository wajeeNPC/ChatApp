import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashbored, Login, SignUp, Home, Navbar } from './pages';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const {user}  = useAuthContext()

  return (
    <>
     <Navbar/>
     <Routes>
          <Route path="/" element={ user  ? <Navigate to={'/dashboard'}/> : <Home/>}/>
          <Route path="/signup" element={ user  ? <Navigate to={'/dashboard'}/> :<SignUp/>}/>
          <Route path="/login" element={ user  ? <Navigate to={'/dashboard'}/> : <Login/>}/>
          <Route path="/dashboard" element={<Dashbored/>}/>
        </Routes>
    </>
  )
}

export default App
