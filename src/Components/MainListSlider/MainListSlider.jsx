import React from 'react'
import './MainListSlider.scss'

const MainListSlider = () => {

  const images = [
    "/public/slider__img1.jpg",
    "/public/slider__img2.jpg",
    "/public/slider__img3.webp",
    "/public/slider__img4.webp",
    "/public/slider__img5.webp",

  
  ];
  const imagess = [
    "/public/mainlist-1img.webp",
    "/public/mainlist-1img.webp",
    "/public/mainlist-1img.webp",
    "/public/mainlist-1img.webp",
    "/public/mainlist-1img.webp",
  ];



  return (
    <>

<section>

<div className="slider-container2">
      <div  data-aos="fade-left"  data-aos-duration="3000" className="slider-track2">
        {images.map((img, index) => (
          <div className="slide2" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {images.map((img, index) => (
          <div className="slide2" key={index + imagess.length}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>


    <div  data-aos="fade-right"  data-aos-duration="3000"  className="slider-container">
      <div className="slider-track">
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {images.map((img, index) => (
          <div className="slide" key={index + images.length}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>




</section>


  

  




    
    
    
    </>
  )
}

export default MainListSlider