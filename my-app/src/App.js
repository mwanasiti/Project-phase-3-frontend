import {React, useState, useEffect} from 'react'
import Home from './components/Home';
import Header from './components/Header';
import './index.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Topics from './components/Topics'
import Courses from './components/Courses'



const App = () => {
  const [users, setUsers] = useState([]);

  const handleData=(item)=>{
    const postHeaders={
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(item)
  
    }
    fetch('https://fempro-backend.herokuapp.com/courses',postHeaders)
    .then(res=>res.json())
    .then(data=>setUsers([...users,data]))

  }


  useEffect(()=>{
    fetch('')
    .then((res)=> res.json())
    .then((data) =>setUsers(data))
  },[])
  return (
    <div className='App container'>
      <BrowserRouter>
      <Navbar/>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home handleData={handleData} users={users}/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/courses' element={<Courses/>}/>
      <Route exact path='/topics' element={<Topics/>}/>
      </Routes>   
      </BrowserRouter>
 </div>
  );
}



export default App;