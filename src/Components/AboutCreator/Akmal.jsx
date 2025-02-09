import React from 'react'
import './Akmal.scss'
import Slider from '../Slider/Slider'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'





const Akmal = () => {
  return (
   <>

<Header/>
   <section className="Akmal">
      <div className="container">
        <div className="profile">

<Slider/>       



       
        <a class="card" href="#">
      <img alt="" height="40" src="/logo-akmal.png" width="40" />

      <h2>Akmal Kadirov</h2>
      <p>
        My name's Akmal Kadirov, I'm a student of IT Academy </p>
    </a> 
     
        <a class="card" href="#">
      <img alt="" height="40" src="/logo-akmal.png" width="40" />

      <h2>Akmal Kadirov</h2>
      <p>
        My name's Akmal Kadirov, I'm a student of IT Academy </p>
    </a> 
     
        <a class="card" href="#">
      <img alt="" height="40" src="/logo-akmal.png" width="40" />

      <h2>Akmal Kadirov</h2>
      <p>
        My name's Akmal Kadirov, I'm a student of IT Academy </p>
    </a> 
       





       




 
         <a class="card" href="#">
     <img alt="" height="40" src="/avaabbos.jpg" width="40" />
      <h2>My teacher is  Valiev Abbos</h2>
      <p> He's cool and the best teacher. </p>
      He taught me a lot.
    </a>  
        <a class="card" href="#">
    <img alt="" height="40" src="/logo-akmal.png" width="40" />
      <h2>Thanks to Laziz aka, Ruslan Golovanov and ChatGPT for helping me.
        Swiiiiiper
      </h2>
      <p>
        </p>
    </a> 

        {/* <img src="/main-logoakmal.png" alt="" />  */}
        </div>
      </div>
   </section>
   
{/* <Slider/> */}

  <Footer/>
   
   
   </>
  )
}

export default Akmal


// import React, { useState } from 'react';
// import './Akmal.scss';
// import { Link } from 'react-router-dom';
// import Slider from '../Slider';

// const Akmal = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const cards = [
//     {
//       imgSrc: '/logo-akmal.png',
//       title: 'Akmal Kadirov',
//       description: "My name's Akmal Kadirov, I'm a student of IT Academy",
//     },
//     {
//       imgSrc: '/avaabbos.jpg',
//       title: 'My teacher is Valiev Abbos',
//       description: "He's cool and the best teacher. He taught me a lot.",
//     },
//     {
//       imgSrc: '/logo-akmal.png',
//       title: 'Thanks to Laziz aka, Ruslan Golovanov and ChatGPT for helping me.',
//       description: 'Swiiiiiper',
//     },
//   ];

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   return (
//     <>
//       <section className="Akmal">
//         <div className="container">
//           <div className="profile">
//             <button className="arrow prev" onClick={handlePrev}>&lt;</button>
//             <div className="card-slider">
//               {cards.map((card, index) => (
//                 <a
//                   key={index}
//                   className={`card ${index === currentIndex ? 'active' : ''}`}
//                   href="#"
//                   style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
//                 >
//                   <img alt="" height="40" src={card.imgSrc} width="40" />
//                   <h2>{card.title}</h2>
//                   <p>{card.description}</p>
//                 </a>
//               ))}
//             </div>
//             <button className="arrow next" onClick={handleNext}>&gt;</button>
//           </div>
//         </div>
//       </section>
//       {/* <Slider /> */}
//     </>
//   );
// };

// export default Akmal;