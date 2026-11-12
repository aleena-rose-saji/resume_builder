import { Routes,Route } from 'react-router-dom'
import './App.css'
import Foooter from './components/Foooter'
import Header from './components/Header'
import Home from './pages/Home'
import Steps from './pages/Steps'
import Userform from './pages/Userform'
import History from './pages/History'
import ViewResume from './pages/ViewResume'
import Pnf from './pages/Pnf'



function App(){  

  return (
    <>
    <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/steps' element={<Steps/>}/>
      <Route path='/userform' element={<Userform/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/view/:id' element={<ViewResume/>}/>
      <Route path='/*' element={<Pnf/>}/>

      </Routes>
      <Foooter/>
    </>
  )
}

export default App
