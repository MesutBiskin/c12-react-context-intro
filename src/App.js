import { createContext,useState} from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'

export const UserContext = createContext()



function App() {

const [userState, setUserState] = useState({})

  const user = {username:'mbiskin@hotmail.com',
  accountType:'admin',
  _id:'80834093409384030'}

  return (
  
    <BrowserRouter>
    <UserContext.Provider value={{userState,setUserState}}>
      <Header/>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/login' element={ <Login/>} />
      </Routes>
     <Footer/>
     </UserContext.Provider >
     </BrowserRouter>
    
  )
}
export default App;



