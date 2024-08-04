
import {Routes, Route } from 'react-router-dom';
import Header from './widgets/Header'
import Home from './page/Home'
import Text from './page/Text.jsx';
import Userinfo from './page/Userinfo.jsx'
import Analyze from './page/Analyze.jsx'
import Login from './components/Login.jsx'
import Footer from './widgets/Footer'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/text' element={<Text/>}/>
        <Route path='/userinfo' element={<Userinfo/>}/>
        <Route path='/analyze' element={<Analyze/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
