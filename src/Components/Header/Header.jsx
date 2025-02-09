// import React, { useState } from 'react';
// import './Header.scss';
// import { Link } from 'react-router-dom';
// import TabsArticle from '../TabsWrap/TabsArticle';

// const Header = () => {
//   const [isArrowVisible, setIsArrowVisible] = useState(true);

//   const handleButtonClick = () => {
//     setIsArrowVisible((prev) => !prev);
//   };

//   return (



//     <header className="header">
//       <div className="container">
//         <div className="header__wrap">
//           <div>
//             <Link to="/">
//               <img src="/logo-akmal.png" alt="Logo Akmal" />
//             </Link>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/contacts">Contacts</Link>
//             <Link to="/">Навигация <TabsArticle/></Link>
           
//           </div>

//           <div className="btn">
//             {isArrowVisible && <img src="/strelka3.png" alt="Arrow Icon" />}
//             <Link to="/Akmal">
//               <button onClick={handleButtonClick}>Об авторе</button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>


//   );
// };

// export default Header;




//ОСновной код




// import React, { useEffect, useState } from 'react';


// import './Header.scss';
// import { Link } from 'react-router-dom';
// import TabsArticle from '../TabsWrap/TabsArticle';

// const Header = () => {

//   const [isArrowVisible, setIsArrowVisible] = useState(true);

//   const handleButtonClick = () => {
//     setIsArrowVisible((prev) => !prev);
//   };

  
//   const [isTabsVisible, setIsTabsVisible] = useState(false);

//   const handleTabsToggle = () => {
//     setIsTabsVisible((prev) => !prev);
//   };


//   const [isGlowing, setIsGlowing] = useState(false);

//   useEffect(() => {
//     // Запускаем таймер для смены состояния каждые 1 секунду
//     const interval = setInterval(() => {
//       setIsGlowing((prev) => !prev);
//     }, 1500);



    

//     return () => clearInterval(interval); // Очищаем таймер при размонтировании компонента
//   }, []);



  


  

//   return (
//     <header className="header">
//       <div className="container1">
//         <div className="header__wrap">
//           <div>
//             <Link to="/">
//               <img src="/logo-akmal.png" alt="Logo Akmal" />
//             </Link>
           
//             {/* <button
//       className={`navigation__button ${isGlowing ? 'glow' : ''}`}
//       onClick={() => handleTabsToggle()}
//     >
//       <p>Меню➡️</p>
//     </button> */}

// <button
//   className={`navigation__button ${isGlowing ? 'glow' : ''}`}
//   onClick={handleTabsToggle}


// >
//   <p className="button-text">Меню</p>

  
// </button>

// <Link to={'/sale'} className="dropdown" data-aos="fade-up" data-aos-delay="400">
//                     Shop
//                     <img
//                       src="https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png"
//                       alt=""
//                     />
//                     <div className='dropdown-content'>
//                       <Link to={'/'}>Men</Link>
//                       <Link to={'/'}>Women</Link>
//                       <Link to={'/'}>Kids</Link>  
//                     </div>
//                   </Link>

//           </div>

      
//         </div>
//         <div className={`tabs-container ${isTabsVisible ? 'visible' : ''}`}>
//           <TabsArticle />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TabsArticle from '../TabsWrap/TabsArticle';
import './Header.scss';

const Header = () => {
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [isTabsVisible, setIsTabsVisible] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsArrowVisible((prev) => !prev);
  };

  const handleTabsToggle = () => {
    setIsTabsVisible((prev) => !prev);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    // Таймер для смены состояния каждые 1.5 секунды
    const interval = setInterval(() => {
      setIsGlowing((prev) => !prev);
    }, 1500);

    return () => clearInterval(interval); 
  }, []);

  return (
    <header className="header">
      <div className="container1">
        <div className="header__wrap">
          <div data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1500" >
 
            <Link to="/">
              <img  src="/logo-akmal.png" alt="Logo Akmal" />
            </Link>

            <button
              className={`navigation__button ${isGlowing ? 'glow' : ''}`}
              onClick={handleTabsToggle}
            >
              <p className="button-text">Меню</p>

            </button>

         



            <div className="dropdown-wrapper">
              <button 
                className="dropdown-button, navigation__button"
                onClick={handleDropdownToggle}
              >
               <p className="button-text">Меню</p>
                <img
                  
                
                  
                />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <Link to={'/Universal'}>Универсальные</Link>
                  <Link to={'/Edu'}>Учёба</Link>
                  <Link to={'/gen'}>Генерация видео и изображений</Link>
                  <Link to={'/strange'}>Странные или другие</Link>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className={`tabs-container ${isTabsVisible ? 'visible' : ''}`}>
          <TabsArticle />
        </div>
      </div>
    </header>
  );
};

export default Header;
