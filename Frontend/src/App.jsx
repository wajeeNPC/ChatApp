import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Dashbored, Login, SignUp,UserAuth } from './pages';




const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <HashRouter>
        <Routes>
          <Route path="/" element={<UserAuth/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashbored" element={<Dashbored/>}/>
        </Routes>
    </HashRouter>
  </QueryClientProvider>
  )
}

export default App
