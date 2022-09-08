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
      <img src="https://media.istockphoto.com/photos/feminist-movement-hands-togetherness-group-of-multicultural-woman-picture-id1368313283?k=20&m=1368313283&s=612x612&w=0&h=9S2SG4HMexGGxTtOokPoOvsP2rjeKG7iDJ2yteJhdS0=" className="d-block w-100" alt="Wild Landscape"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/photos/multiracial-friends-having-fun-together-outdoor-focus-on-faces-picture-id1372126587?k=20&m=1372126587&s=612x612&w=0&h=PX2j2yj8Tf5SRp4Ki7Gpvkt_sgwFLxYF5artjW7QcZI=" className="d-block w-100" alt="Camera"/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-100" alt="Exotic Fruits"/>
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
