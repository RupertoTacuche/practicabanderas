import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App font-['Nunito_Sans'] text-[14px] bg-gray-100 min-h-screen">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
