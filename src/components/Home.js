import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigation = useNavigate();

  return (
    <div className='homepage'>
      <section className='homeimage'>
      <div className="">
        <img alt='stockImg' src='https://media.istockphoto.com/videos/pink-dust-falling-onto-a-black-surface-and-creating-a-female-gender-video-id1269886110?s=640x640'></img>
      </div>  
        <div>
      <h2>PRO</h2>
      </div>
      </section>
      <div className='buttons'>
        <div>
          <div>
           <button 
            type="button" 
            className="btn btn-outline-primary btn-rounded" 
            data-mdb-ripple-color="dark"
            onClick={()=>{navigation('/courses')}}
            style={{fontSize: '20px', padding: '14px 40px', border: '2px solid #B30042', color: '#B30042'}}
            >
              Courses</button>
           </div>
           <button type="button" 
           className="btn btn-outline-secondary btn-rounded" 
           data-mdb-ripple-color="dark"
           onClick={()=>{navigation('/topics')}}
           style={{fontSize: '20px', padding: '14px 40px', border: '2px solid #B30042', color: '#B30042'}}
           >Topics</button>
           </div>
           <div>
           <button type="button" 
           className="btn btn-outline-success btn-rounded" 
           data-mdb-ripple-color="dark"
           onClick={()=>{navigation('/authors')}}
           style={{fontSize: '20px', padding: '14px 40px', border: '2px solid #B30042', color: '#B30042'}}
           >Authors</button>
           </div>
          {/* <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Courses</button>
          <button type="button" className="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Topics</button>
          <button type="button" className="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark">Authors</button> */}
      </div>
    </div>
  )
}

export default Home;