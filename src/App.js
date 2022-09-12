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
import FemPro from './components/FemPro';
import Users from './components/Users';



const App = () => {
  const [authors, setAuthors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [topics, setTopics] = useState([]);

  // function deleteTopic(id){
  //   fetch(`https://fempro-backend.herokuapp.com/topics/${id}`,{
  //       method: "DELETE",
  //   })
  //   .then(r => r.json())
  //   .then(() => {
  //       const goThru = topics.filter((topic) => topic.id !== id)
  //           setTopics(goThru)
  //       })
  // }



  useEffect(()=>{
    fetch('https://fempro-backend.herokuapp.com/courses')
    .then((res)=> res.json())
    .then((data) =>setCourses(data))

    fetch('https://fempro-backend.herokuapp.com/authors')
    .then((res)=> res.json())
    .then((data) =>setAuthors(data))

    fetch('https://fempro-backend.herokuapp.com/topics')
    .then((res)=> res.json())
    .then((data) =>setTopics(data))
  },[])
  return (
    <div className='App container'>
      <Navbar/>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact='true' path='/' element={<Home/>}/>
          <Route path='/fempro' element={<FemPro/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/courses' element={<Courses courses={courses}/>}/>
          <Route path='/topics' element={<Topics topics={topics}/>}/>
          <Route path='/authors' element={<Authors authors={authors}/>}/>
          <Route path='/users' element={<Users />}/>
        </Routes>
      </BrowserRouter>
 </div>
  );
}



export default App;