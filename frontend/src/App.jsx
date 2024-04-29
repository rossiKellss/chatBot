import './App.css'
import ChatHome from './pages/ChatHome'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<ChatHome/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
     
    </>
  )
}

export default App;
