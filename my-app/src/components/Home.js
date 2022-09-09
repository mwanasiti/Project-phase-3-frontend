import React from 'react'

const Home = () => {
  return (
    <div className='homepage'>
      <section className='homeimage'>
      <div className="">
        <img className='' src='https://media.istockphoto.com/videos/pink-dust-falling-onto-a-black-surface-and-creating-a-female-gender-video-id1269886110?s=640x640'></img>
      </div>  
        <div>
      <h2>PRO</h2>
      </div>
      </section>
      <div className='buttons'>
          <button type="button" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Courses</button>
          <button type="button" className="btn btn-outline-secondary btn-rounded" data-mdb-ripple-color="dark">Topics</button>
          <button type="button" className="btn btn-outline-success btn-rounded" data-mdb-ripple-color="dark">Authors</button>
      </div>
    </div>
  )
}

export default Home;