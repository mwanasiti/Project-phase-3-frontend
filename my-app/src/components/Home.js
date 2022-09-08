import React from 'react'

const Home = () => {
  return (
    <div className='homepage'>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-mdb-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div className="carousel-inner text-center" style={{backgroundColor: "rgba(0, 0, 0, 0.6)"}} >
    <div className="carousel-item active">
      <img className='slideimage' src="https://media.istockphoto.com/photos/social-equality-woman-stands-for-equal-rights-picture-id1358934225?k=20&m=1358934225&s=612x612&w=0&h=BCSVEXambfBww0UO8ZvAlKg7jEWjxL0DIO2JD-m4Zd8=" className="d-block w-100" alt="Wild Landscape"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img className='slideimage' src="https://media.istockphoto.com/photos/multiracial-friends-having-fun-together-outdoor-focus-on-faces-picture-id1372126587?k=20&m=1372126587&s=612x612&w=0&h=PX2j2yj8Tf5SRp4Ki7Gpvkt_sgwFLxYF5artjW7QcZI=" className="d-block w-100" alt="Camera"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img className='slideimage' src="https://media.istockphoto.com/photos/feminist-pride-flag-waving-in-the-wind-sky-and-sun-background-3d-picture-id1346068076?k=20&m=1346068076&s=612x612&w=0&h=nxT_jbkVE4-IFEfjQ2vaDPT5hRQkFhLcLeWUV8EXYZw=" className="d-block w-100" alt="Exotic Fruits"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    </div>
  )

}

export default Home;
