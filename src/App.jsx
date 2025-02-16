import { Container, Stack, Button } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Summary from './pages/Summary'
import Login from './pages/Login'
import Signup from './pages/Signup.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

function App() {
  return (
    <>
    <BrowserRouter>
      <Stack direction="horizontal">
        <Sidebar></Sidebar>
        <Routes>
            <Route path="/BudgetTracker/" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>}/>
            <Route path="/BudgetTracker/Summary" element={
              <PrivateRoute>
                <Summary />
              </PrivateRoute>}/>
            <Route path="/BudgetTracker/Login" element={<Login />} />
            <Route path="/BudgetTracker/Signup" element={<Signup />} />
        </Routes>
      </Stack>
    </BrowserRouter>
    </>
  );
}

export default App;