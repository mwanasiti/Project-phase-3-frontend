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
import Authors from './components/Authors'



const App = () => {
  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);

  const handleData=(item)=>{
    const postHeaders={
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(item)
  
    }


  useEffect(()=>{
    fetch('https://fempro-backend.herokuapp.com/courses',postHeaders)
    .then((res)=> res.json())
    .then((data) =>setCourses(data))

    fetch('https://fempro-backend.herokuapp.com/authors',postHeaders)
    .then((res)=> res.json())
    .then((data) =>setAuthors(data))

    fetch('https://fempro-backend.herokuapp.com/topics',postHeaders)
    .then((res)=> res.json())
    .then((data) =>setTopics(data))
    },[])}
  return (
    <div className='App container'>
      <Navbar/>
      <Header/>
      <Routes>
          <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/courses' element={<Courses courses={courses}/>}/>
      <Route exact path='/topics' element={<Topics topics={topics}/>}/>
      <Route exact path='/authors' element={<Authors authors={authors}/>}/>
      </Routes>
 </div>
  );
}



export default App;