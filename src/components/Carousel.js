import React from 'react'

export default function Carousel(props) {
  return (
    <div id="carouselExampleCaptions" className="carousel slide ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={`active bg-${props.textMode}`} aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className={`bg-${props.textMode}`} aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className={`bg-${props.textMode}`} aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../logo512.png" className="d-block w-30" alt="Not found"/>
      <div className={`carousel-caption d-none d-md-block text-${props.textMode}`}>
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../logo512.png" className="d-block w-30" alt="Not found"/>
      <div className={`carousel-caption d-none d-md-block text-${props.textMode}`}>
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../logo512.png" className="d-block w-30 object-fit-cover" alt="Not found"/>
      <div className={`carousel-caption d-none d-md-block text-${props.textMode}`}>
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span className="visually-hidden" >Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
