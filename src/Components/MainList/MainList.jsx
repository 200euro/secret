import React, { useEffect, useState } from 'react'
import './MainList.scss'
import MainListSlider from '../MainListSlider/MainListSlider'
import Slider from 'react-slick'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Swiper } from 'swiper/react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



const MainList = () => {



  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [showCards, setShowCards] = useState(false);


  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 780);2
  };


  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);


  const toggleCards = () => {
    setShowCards(!showCards);
  };




  const texts = [
    //как работает ии
    "Поскольку ажиотаж вокруг ИИ усилился, поставщики изо всех сил пытаются продвигать то, как их продукты и услуги используют ИИ. Часто то, что они называют ИИ, является просто одним из компонентов ИИ, например, машинным обучением. ИИ требует наличия специализированного аппаратного и программного обеспечения для написания и обучения алгоритмов машинного обучения. Ни один язык программирования не является синонимом ИИ, но некоторые из них, включая Python, R и Java, популярны.",
    "Как правило, системы ИИ работают, поглощая большие объемы помеченных обучающих данных, анализируя данные на предмет корреляций и закономерностей и используя эти закономерности для прогнозирования будущих состояний. Таким образом, чат-бот, получающий примеры текстовых чатов, может научиться производить реалистичный обмен мнениями с людьми, а инструмент распознавания изображений может научиться идентифицировать и описывать объекты на изображениях, просматривая миллионы примеров.",
    "Программирование ИИ фокусируется на трех когнитивных навыках: обучении, рассуждении и самокоррекции.",
    "Процесс обучения. Этот аспект программирования ИИ фокусируется на сборе данных и создании правил того, как превратить данные в полезную информацию. Правила, называемые алгоритмами, предоставляют вычислительным устройствам пошаговые инструкции по выполнению конкретной задачи.",
    "Процесс построения рассуждения. Этот аспект программирования ИИ фокусируется на выборе правильного алгоритма для достижения желаемого результата.",
    "Процесс самокоррекции. Этот аспект программирования ИИ предназначен для постоянной тонкой настройки алгоритмов и обеспечения максимально точных результатов.",
  ]


    const texts2 = [
//Может ли ИИ выйти из подконтроля?
      "Может ли ИИ выйти из подконтроля? Мы переживаем эпоху бурного развития искусственного интеллекта. Масштабы этого явления ещё трудно оценить по-настоящему. Ясно одно: эта технология уже сейчас затрагивает самые широкие области нашей жизни, и её влияние будет только увеличиваться. Но возникает закономерный вопрос: не случится ли так, что эта технология выйдет из под нашего контроля?",
      
      "Впервые эту проблему громко озвучил человек, который по праву считается «отцом» искусственного интеллекта: английский учёный Алан Тьюринг. В 1951 году Тьюринг в своей статье написал: «Как только метод машинного мышления заработает, не потребуется много времени, чтобы превзойти наши слабые силы. ... Следовательно, на каком-то этапе мы должны ожидать, что машины возьмут на себя управление...». А ведь это пишет человек, который стоял у истоков современной компьютерной науки: «универсальная машина Тьюринга» является математической моделью всех современных компьютеров.",
      
      "Тьюринг также создал «тест Тьюринга» для определения способности машины имитировать человеческую речь. Именно эта работа стала основой современного искусственного интеллекта. В общем, как это нередко бывает с гениями: сам придумал, и сам же предупредил о возможных проблемах.",
      
      "Обнадёживает, что текущий уровень развития искусственного интеллекта находится очень далеко от способности создавать проблемы подобного рода. Поэтому сейчас самое время проявить ответственность, чтобы исключить такие риски в будущем.",
    ]

    const texts3 = [
      //Как нейросети повлияли на нашу жизнь?
      "Как нейросети повлияли на нашу жизнь? Нейросети кардинально изменили многие аспекты нашей жизни, и их влияние продолжает расти. Вот несколько ключевых направлений, в которых они проявили себя:",
      
      
      "Улучшение повседневных технологий: Голосовые помощники, такие как Siri, Alexa и Google Assistant, используют нейросети для распознавания речи и понимания запросов. Переводчики, например, Google Translate, обеспечивают быстрые и точные переводы благодаря системам глубокого обучения. Рекомендательные системы помогают предложить фильмы, музыку, товары и контент на таких платформах, как Netflix, Spotify, Amazon и YouTube.",
    
      "Медицина: Алгоритмы помогают диагностировать заболевания, такие как рак, анализировать МРТ и рентгеновские снимки, а также прогнозировать риски заболеваний. Персонализированное лечение использует модели для анализа генетической информации, предлагая индивидуальные методы терапии. Нейросети ускоряют процесс поиска и разработки новых препаратов.",
    
      "Образование: Системы, такие как Duolingo, адаптируются под способности ученика, обеспечивая персонализированное обучение. Нейросети помогают проверять работы студентов и анализировать их прогресс. Также создаются интерактивные учебные материалы, основанные на ИИ, что способствует лучшему освоению знаний.",
    
      "Творчество: Нейросети создают тексты, музыку, изображения, видео и даже дизайн. Они также разрабатывают уникальные эффекты и решения для дополненной реальности. Художники могут использовать нейросети для ускорения творческих процессов и создания концепт-артов.",

    ]


    const texts4=[
      //Что такое нейросети?
"Что такое нейросети? Нейросети (или искусственные нейронные сети) — это математические модели, которые имитируют работу человеческого мозга для решения различных задач. Они основаны на системе нейронов, соединённых между собой, которые обрабатывают и анализируют данные. Нейросети востребованы за счет своей универсальности, работы с большими данными, адаптивности и возможности автоматизации сложных задач.",
    
      "Нейросети помогают решать задачи быстрее, точнее и эффективнее, чем раньше, открывая новые горизонты в различных сферах, таких как технологии, медицина и бизнес.",
    ]



const texts5 = [
      //"Что такое ИИ?
      "Что такое ИИ? Искусственный интеллект (ИИ) — это область компьютерных наук, занимающаяся созданием систем, которые могут выполнять задачи, требующие интеллектуальных способностей, обычно ассоциируемых с человеческим мышлением. Это включает в себя обучение, рассуждение, принятие решений, обработку языка, восприятие и многое другое.",
    
      "Слабый ИИ (Narrow AI) разработан для выполнения конкретных задач, таких как голосовые ассистенты (Siri, Alexa), чат-боты и системы рекомендаций.",
    
      "Сильный ИИ (General AI) — это теоретическая концепция ИИ, способного выполнять любые интеллектуальные задачи, которые может решить человек. На данный момент ИИ ещё не достиг этой стадии.",
    
      "Сверхразумный ИИ (Superintelligent AI) — гипотетическая форма ИИ, которая превосходит человеческие способности во всех областях. Это объект исследований и дискуссий.",
]



const texts6 = [
//Как работает нейросеть?
      "Как работает нейросеть? Нейросеть работает, имитируя работу биологических нейронов в человеческом мозге. Она состоит из узлов (искусственных нейронов), соединённых слоями, где каждый узел получает, обрабатывает и передаёт информацию.",
    
      "Нейросеть состоит из трёх основных слоёв: Входной слой получает данные (например, пиксели изображения, текст или числовые значения). Каждый узел этого слоя представляет отдельный входной параметр.",
    
      "Скрытые слои — здесь происходит основная обработка информации. Каждый узел (нейрон) выполняет вычисления, преобразуя данные с помощью весов, функций активации и других параметров.Выходной слой выдаёт результат (например, класс объекта, вероятность, предсказание) ",
    ];
    

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % texts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + texts.length) % texts.length);
  };


  const [currentSlide2, setCurrentSlide2] = useState(0);

  const nextSlide2 = () => {
    setCurrentSlide2((prev) => (prev + 1) % texts2.length);
  };

  const prevSlide2 = () => {
    setCurrentSlide2((prev) => (prev - 1 + texts2.length) % texts.length);
  };


  const [currentSlide3, setCurrentSlide3] = useState(0);

  const nextSlide3 = () => {
    setCurrentSlide3((prev) => (prev + 1) % texts3.length);
  };

  const prevSlide3 = () => {
    setCurrentSlide3((prev) => (prev - 1 + texts3.length) % texts3.length);
  };


  const [currentSlide4, setCurrentSlide4] = useState(0);

  const nextSlide4 = () => {
    setCurrentSlide4((prev) => (prev + 1) % texts4.length);
  };
  const prevSlide4 = () => {
    setCurrentSlide4((prev) => (prev - 1 + texts4.length) % texts4.length);
  };


  
  const [currentSlide5, setCurrentSlide5] = useState(0);

  const nextSlide5 = () => {
    setCurrentSlide5((prev) => (prev + 1) % texts5.length);
  };

  const prevSlide5 = () => {
    setCurrentSlide5((prev) => (prev - 1 + texts5.length) % texts5.length);
  };


  const [currentSlide6, setCurrentSlide6] = useState(0);

  const nextSlide6 = () => {
    setCurrentSlid6((prev) => (prev + 1) % texts6.length);
  };

  const prevSlide6 = () => {
    setCurrentSlid6((prev) => (prev - 1 + texts6.length) % texts6.length);
  };






  return (


    

    <>
    <Header/>
    <section>

    

    <section className="main">
      <div  className="container">
         <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="main__box">
          
          <h1>Этот сайт расскажет о том, что такое нейросети, ИИ(Искуственный Интелект) <p>
          как они работают и меняют нашу с вами жизнь 
            </p>
             </h1>
         
         
        

 


<div className="circle-container">
      <div className="circle large-circle"></div>
      <div className="circle medium-circle"></div>
      <div className="circle small-circle"></div>
      <div className="circle orange-circle"></div>
    </div>


         </div>
           
         <div className="Slider__main">
          <MainListSlider/>
         </div>




           <div className="first__introduction">
     <div className="title__main"><h1>Ориентировочные вопросы: </h1></div> 

     <div className="quest__1">
              <a  href="#quest1"> Как работает ИИ? </a><br />
              <a href="#quest2"> Может ли ИИ выйти из подконтроля? </a><br />
              <a href="#quest3"> Как нейросети повлияли на нашу жизнь? </a><br />
              </div>

               <div className="quest__2">
               <a href="#quest4"> Что такое нейросети? </a> <br />
              <a href="#quest5"> Что такое ИИ? </a><br />
              <a href="#quest6"> Как работает нейросеть? </a><br />
                </div>        

              <div className="quest__3">
              <a href=""> Как ваши дела? </a><br />
              <a href=""> Как мои дела? </a><br />
              </div>
              
              {/* <p> <a href="https://ru.wikipedia.org/wiki/Нейронная_сеть">Нейронные сети</a> — это математические модели, которые воспроизводят работу человеческого мозга. Они состоят из нейронов, которые соединены между собой и передают друг другу сигналы. Нейронные сети используются для решения различных задач, таких как распознавание образов, обработка естественного языка, управление роботами и многое другое.</p> */}
           </div>
      </div>
    </section>
    

    <secttion className="CardAIII">
     <div className="container">
      
      <div data-aos="fade-up"
     data-aos-duration="2000" className="cardAi">

      <a href="https://chatgpt.com/">
        <div className="cardAim">
        <img className='GPT' src="/chatgpt.webp" alt="" />
          <h1>ChatGPT</h1>
        </div>
        </a>
        

        <a href="https://www.davinciaigen.com/">
        
        <div className="cardAim">
         <img className='davin' src="/davinci.normal.png" alt="" />
          <h1>Davinci AI generator</h1>
        </div>
        </a>



          <a href="https://www.deepseek.com/">
          <div  className="cardAim">
        <img className='kit' src="/kitdeep.png" alt="" />
          <h1>Deep Seek  </h1>
        </div>
          </a>
       


        <a href="https://www.midjourney.com/home?callbackUrl=%2Fapp%2F">
        <div className="cardAim">
        <img className='mid' src="/Midjournelogo.png" alt="" />
          <h1>Midjourney</h1>
        </div>
        </a>
      </div>

      <div >
      {isMobile ? (
        <>
          <button onClick={toggleCards}>
            {showCards ? 'Скрыть карточки' : 'Показать карточки⬇️'}
          </button>
          {showCards && (
            <div className="cards">




              <div className="card1"><a href="https://chatgpt.com/">
        <div className="cardAim">
        <img className='GPT' src="/chatgpt.webp" alt="" />
          <h1>ChatGPT</h1>
        </div>
        </a></div>




              <div className="card1">    <a href="https://www.davinciaigen.com/">
        
        <div className="cardAim">
         <img className='davin' src="/davinci.normal.png" alt="" />
          <h1>Davinci AI generator</h1>
        </div>
        </a></div>




              <div className="card1"> <a href="https://www.deepseek.com/">
          <div  className="cardAim">
        <img className='kit' src="/kitdeep.png" alt="" />
          <h1>Deep Seek  </h1>
        </div>
          </a></div>



              <div className="card1"><a href="https://www.midjourney.com/home?callbackUrl=%2Fapp%2F">
        <div className="cardAim">
        <img className='mid' src="/Midjournelogo.png" alt="" />
          <h1>Midjourney</h1>
        </div>
        </a></div>



            </div>
          )}
        </> 
      )  :
      
      (

        <div className="cards0">

          <div className="card1">Карточка 1</div>
          <div className="card1">Карточка 2</div>
          <div className="card1">Карточка 3</div>
        </div>
      )
      }
      
    </div>
      
     </div>
    </secttion>

    <section id='quest1' className="Question">
      <div className="container">
      <div className="quest__1__box1">
      <h1>Как работает ИИ?</h1>
      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text1">
       
        <d iv data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="slider">
          <p className="slide">{texts[currentSlide]}</p>
        </d>
        <div className="buttons">
          <button className="prev" onClick={prevSlide}>Назад</button>
          <button className="next" onClick={nextSlide}>Вперед</button>
        </div>
      </div>
    </div> 

    
     
      <div className="quest__1__box1">
      <h1 id='quest2'>Может ли ИИ выйти из подконтроля?</h1>
      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text1">
       
        <div className="slider">
          <p className="slide">{texts2[currentSlide2]}</p>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide2}>Назад</button>
          <button className="next" onClick={nextSlide2}>Вперед</button>
        </div>
      </div>
    </div> 


      <div className="quest__1__box1">
      <h1 id='quest3'>Как нейросети повлияли на нашу жизнь?</h1>
      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text1">
       
        <div className="slider">
          <p className="slide">{texts3[currentSlide3]}</p>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide3}>Назад</button>
          <button className="next" onClick={nextSlide3}>Вперед</button>
        </div>
      </div>
    </div> 



      <div className="quest__1__box1">
      <h1 id='quest4'>Что такое нейросети? </h1>
      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text1">
       
        <div className="slider">
          <p className="slide">{texts4[currentSlide4]}</p>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide4}>Назад</button>
          <button className="next" onClick={nextSlide4}>Вперед</button>
        </div>
      </div>
    </div>



      <div className="quest__1__box1">
      <h1 id='quest5'>Что такое ИИ?</h1>
      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text1">
       
        <div className="slider">
          <p className="slide">{texts5[currentSlide5]}</p>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide5}>Назад</button>
          <button className="next" onClick={nextSlide5}>Вперед</button>
        </div>
      </div>
    </div>


      <div className="quest__1__box1">
      <h1 id='quest6'> Как работает нейросеть? </h1>
      <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text1">
       
        <div className="slider">
          <p className="slide">{texts6[currentSlide6]}</p>
        </div>
        <div className="buttons">
          <button className="prev" onClick={prevSlide6}>Назад</button>
          <button className="next" onClick={nextSlide6}>Вперед</button>
        </div>
      </div>
    </div>  




   


        {/* <div className="quest__2__box">
          <div className="text">
            <h1 id='quest2'>Может ли ИИ выйти из подконтроля?</h1>
            <p>Мы переживаем эпоху бурного развития искусственного интеллекта. Масштабы этого явления ещё трудно оценить по-настоящему. Ясно одно: эта технология уже сейчас затрагивает самые широкие области нашей жизни, и её влияние будет только увеличиваться. Но возникает закономерный вопрос: не случится ли так, что эта технология выйдет из под нашего контроля?</p> <br />

            <p>Впервые эту проблему громко озвучил человек, который по праву считается «отцом» искусственного интеллекта: английский учёный Алан Тьюринг. В 1951 году Тьюринг в своей статье написал: «Как только метод машинного мышления заработает, не потребуется много времени, чтобы превзойти наши слабые силы. ... Следовательно, на каком-то этапе мы должны ожидать, что машины возьмут на себя управление...». А ведь это пишет человек, который стоял у истоков современной компьютерной науки: «универсальная машина Тьюринга» является математической моделью всех современных компьютеров. Учёный также создал «тест Тьюринга» для определения способности машины имитировать человеческую речь. Именно эта работа стала основой современного искусственного интеллекта. В общем, как это нередко бывает с гениями: сам придумал, и сам же предупредил о возможных проблемах. Напоминает нашего академика Сахарова, который сперва изобрёл термоядерный синтез, а потом всерьёз увлёкся борьбой за мир и даже получил за это Нобелевскую премию мира.</p> <br />

            <p>Впервые эту проблему громко озвучил человек, который по праву считается «отцом» искусственного интеллекта: английский учёный Алан Тьюринг. В 1951 году Тьюринг в своей статье написал: «Как только метод машинного мышления заработает, не потребуется много времени, чтобы превзойти наши слабые силы. ... Следовательно, на каком-то этапе мы должны ожидать, что машины возьмут на себя управление...». А ведь это пишет человек, который стоял у истоков современной компьютерной науки: «универсальная машина Тьюринга» является математической моделью всех современных компьютеров. Учёный также создал «тест Тьюринга» для определения способности машины имитировать человеческую речь. Именно эта работа стала основой современного искусственного интеллекта. В общем, как это нередко бывает с гениями: сам придумал, и сам же предупредил о возможных проблемах. Напоминает нашего академика Сахарова, который сперва изобрёл термоядерный синтез, а потом всерьёз увлёкся борьбой за мир и даже получил за это Нобелевскую премию мира.</p>

            <p>Обнадёживает, что текущий уровень развития искусственного интеллекта находится очень далеко от способности создавать проблемы подобного рода. Поэтому сейчас самое время проявить ответственность, чтобы исключить такие риски в будущем.</p> <br />
          </div>
        </div>

        <div className="quest__3__box">
          <div className="text">
            <h1 id='quest3'></h1><br />
                <h3>Нейросети кардинально изменили многие аспекты нашей жизни, и их влияние продолжает расти. Вот несколько ключевых направлений, в которых они проявили себя:</h3><br />

                <h3>Улучшение повседневных технологий:</h3>

               <p className="stolbik"><li>Голосовые помощники: Siri, Alexa и Google Assistant используют нейросети для распознавания речи и понимания запросов. </li><br /></p><br />
                 
                 <p className="stolbik"><li>Переводчики: Google Translate и другие инструменты обеспечивают быстрые и точные переводы благодаря системам глубокого обучения.</li>  <br /></p><br />
               
               <p className="stolbik"><li>Рекомендательные системы: Нейросети помогают рекомендовать фильмы, музыку, товары и контент на таких платформах, как Netflix, Spotify, Amazon и YouTube.</li> <br /></p><br />
                    <h3>Медицина</h3>
              <p className="stolbik"><li>Диагностика заболеваний: Алгоритмы помогают обнаруживать рак, анализировать МРТ и рентгеновские снимки, прогнозировать риск заболеваний.</li></p><br />
              <p className="stolbik"><li>Персонализированное лечение: Используются модели для анализа генетической информации и предложений индивидуальных методов терапии.</li></p><br />
              <p className="stolbik"><li>Разработка лекарств: Нейросети ускоряют процесс поиска и тестирования новых препаратов.</li></p><br />

                    <h3>Образование</h3>
              <p className="stolbik"><li>Персонализированное обучение: Системы, такие как Duolingo, адаптируются под способности и темп ученика.</li></p><br />
              <p className="stolbik"><li>Автоматизация оценки: Нейросети помогают проверять работы студентов и анализировать прогресс.</li></p><br />
              <p className="stolbik"><li>Доступ к знаниям: Создаются интерактивные учебные материалы, основанные на ИИ.</li></p><br />


               <h3>Творчество:</h3>
               <p className='stolbik'> <li>Генерация контента: Нейросети создают тексты, музыку, изображения, видео и даже дизайн.</li></p><br />
               <p className='stolbik'> <li>Дополненная реальность: Создаются уникальные эффекты и решения для развлечений.</li></p><br />
               <p className='stolbik'> <li>Поддержка художников: Помощь в создании концепт-артов и ускорении творческих процессов..</li></p><br />
          

          </div>
        </div>

          <div className="quest__4__box">
            <div className="text">
              <h1 id='quest4'>Что такое нейросети?</h1>

                <p>
                Нейросети (или искусственные нейронные сети) — это математические модели, которые имитируют работу человеческого мозга для решения различных задач. Они основаны на системе "нейронов", соединённых между собой, которые обрабатывают и анализируют данные. Вот основные аспекты, которые делают нейросети такими востребованными:</p>
                
                <p>1. Универсальность</p>
                <p>2. Работа с большими данными</p>
                <p>3. Адаптивность</p>
                <p>4. Возможность автоматизации 
                  <p>5. Решение сложных задач</p>
                  <h5>Благодаря нейросетям мы можем решать задачи быстрее, точнее и эффективнее, чем раньше. Это открывает новые горизонты в технологиях, медицине, бизнесе и многих других сферах.</h5> <br /><br />
                </p>
            </div>
          </div>

          <div className="quest__5__box">
            <div className="text">
              <h1 id='quest5'>Что такое ИИ?</h1>


              <p>
              Искусственный интеллект (ИИ) — это область компьютерных наук, занимающаяся созданием систем, которые могут выполнять задачи, требующие интеллектуальных способностей, обычно ассоциируемых с человеческим мышлением. Это включает в себя обучение, рассуждение, принятие решений, обработку языка, восприятие и многое другое.</p> <br />

              <h1>Основные аспекты ИИ:</h1>
              <p><li>Слабый ИИ (Narrow AI):</li></p><br />
              <p><li>Разработан для выполнения конкретных задач.</li></p><br />
              <p><li>Примеры: голосовые ассистенты (Siri, Alexa), чат-боты, системы рекомендаций.</li></p><br />

              <h1>Сильный ИИ (General AI):</h1>
              <p><li>Теоретическая концепция ИИ, способного выполнять любые интеллектуальные задачи, которые может решить человек.</li></p><br />
              <p><li>На данном этапе развития ИИ ещё не достиг этой стадии.</li></p><br />


              <h1>Сверхразумный ИИ (Superintelligent AI):</h1>
              <p><li>Гипотетическая форма ИИ, которая превосходит человеческие способности во всех областях. Это объект дискуссий и исследований.</li></p> <br />
            </div>
          </div>


          <div className="quest__6__box">
            <div className="text">

              <h1 id='quest6'>Как работает нейросеть? </h1>
              <p>Нейросеть работает, имитируя работу биологических нейронов в человеческом мозге. Она состоит из узлов (искусственных нейронов), соединённых слоями, где каждый узел получает, обрабатывает и передаёт информацию. </p><br />

              <h1>Нейросеть состоит из трёх основных слоёв:</h1><br />

              <h3><li>Входной слой:</li></h3> <br />
              <p><li>Получает данные (например, пиксели изображения, текст или числовые значения).</li></p> <br />
              <p><li>Каждый узел этого слоя представляет отдельный входной параметр.</li></p> <br />

              <h1>Скрытые слои:</h1><br />
              <p><li>Здесь происходит основная обработка информации.</li></p> <br />
              <p><li>Каждый узел (нейрон) выполняет вычисления, преобразуя данные с помощью весов, функций активации и других параметров.</li></p> <br />
              <h1>Выходной слой:</h1><br />
              <p><li>Выдаёт результат (например, класс объекта, вероятность, предсказание).</li></p>
              

            </div>
          </div> */}


        <div data-aos="zoom-in-up" className="recomended">
       <div> <h1>Видео которые могут дать вам больше информации про нейросети, ИИ, и может узнаете что-то новое 😊</h1></div>
       <div className="video__main">
        
       
        <div className="video">
        <iframe width="300" height="161" src="https://www.youtube.com/embed/fJOPGbbqMvw" title="Возможно, мы проиграли | ALI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="161" src="https://www.youtube.com/embed/1A_9slmQx8M" title="Почему НЕЙРОСЕТИ нельзя КОНТРОЛИРОВАТЬ? — ТОПЛЕС" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="video2">
        <iframe width="300" height="161" src="https://www.youtube.com/embed/VxDeWt5v2i0" title="Первый СИЛЬНЫЙ ИНТЕЛЛЕКТ | этот ИИ изменит мир" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <iframe width="300" height="161" src="https://www.youtube.com/embed/7GMgPRNeCvg" title="КУДА приведет нас ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
        </div>
      </div>
    </section>
    <Footer/>
    </section>

    </>
  )
}

export default MainList 
