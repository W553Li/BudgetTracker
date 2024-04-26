import { Container, Stack, Button } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Summary from './pages/Summary'


function App() {
  return (
    <>
    <Stack direction="horizontal">
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/BudgetTracker/" element={<Home />}/>
        <Route path="/summary" element={<Summary />}/>
      </Routes>
    </Stack>
    </>
  )
}

export default App
