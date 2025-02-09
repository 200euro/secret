import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Strange.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";

const Strange = () => {

  [
    { "image": "https://example.com/image1.jpg", "name": "Person 1" },
    { "image": "https://example.com/image2.jpg", "name": "Person 2" }
  ]

  return (
    <>
      <section className="Strange">
        <Header />
        <div className="container">


            <h1 data-aos="zoom-out"
               data-aos-offset="300"
     data-aos-easing="ease-in-sine"
             className="strange-title">
              Подборка дурных, странных, проклятых и занятных нейросетевых сервисов
            </h1>
            <p data-aos="zoom-out"
               data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="strange-subtitle">
              Попробуйте, пока они ещё живы и бесплатны
            </p>
            <div data-aos="zoom-out"
               data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="strange-content">
              <h2 className="strange-content-title">Содержание:</h2>
              <ul data-aos="zoom-out"
               data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="strange-list">
                <li>
                  <button  className="strange-button">
                   <a href="#pit">Придумать имя вашему питомцу</a> 
                  </button>
                </li>
                <li>
                  <button className="strange-button">
                 <a href="#gad"> ИИ-гадалка</a>  
                  </button>
                </li>
                <li>
                  <button className="strange-button">
                   <a href="#rec">Генератор рецептов</a> 
                  </button>
                </li>
                <li>
                  <button className="strange-button">
                   <a href="#gen"> Поиграть с Гэндальфом</a>
                  </button>
                </li>
               
                
            
              </ul>
              <p className="strange-footer-text">
                Сегодня мы собрали подборку дурных сервисов на базе нейросетей. Если у вас есть время, заходите побаловаться.
              </p>
            </div>


<div data-aos="zoom-out"
               data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="pitomci">
<h1 id="pit" className="pet-namer-title">Придумать имя вашему питомцу</h1>
        <a
          href="https://astroguide.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="pet-namer-link"
        >
          https://aipetnamer.herokuapp.com/
        </a>
        <p className="pet-namer-description">
        Теперь можно выбрать имя щенку или котёнку за несколько минут. Выбираем: пол питомца, цвет шерсти, происхождение. На основе этого нейросеть сформулирует самое подходящее имя.
        </p>
        <div className="pet-namer-image">
          <img
            src="/pitomci.webp"
            alt=""
          />
        </div>
        <p className="pet-namer-result">
          На основе наших данных вышли следующие имена: Kaito (海斗), Kenshin (剣心), Haku (白), Sōsuke (宗輔), Shōta (将太). То есть основным фактором для выбора имени в этом ИИ является происхождение питомца. У нас стоит Japanese, поэтому все имена — с японским мотивом.
        </p>
</div>
          
<div data-aos="zoom-out"
               data-aos-offset="1000"
     data-aos-easing="ease-in-sine" className="gadalka">
          <h1 id="gad" className="pet-namer-title">ИИ-гадалка</h1>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="pet-namer-link"
        >
            <a
          href="https://astroguide.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="pet-namer-link"
        >
          https://astroguide.ai/
        </a>
          
        </a>
        <p className="pet-namer-description">
        Работает на русском и английском. Может сделать расклад на таро или получить у звёзд достоверную информацию по вашему знаку зодиака. Есть любовный калькулятор и сонник — незаменимая вещь для тех, кто1
        </p>
        <div className="pet-namer-image">
          <img
            src="/gada1.webp"
            alt=""
          />
          <img
            src="/gada2.webp"
            alt=""
          />
          <img
            src="/gada3.webp"
            alt=""
          />
          <img
            src="/gada4.webp"
            alt=""
          />
        </div>
       
        <p>
        <p className="pet-namer-result">
        Мои карты таро показали, что у меня прекрасная комбинация карт. Центральное место в жизни занимает любовь; колесница означает, что я преодолею все преграды на пути к любви; а карта Иерофанта — что в ближайшем будущем меня ждут духовные искания. <br /> 
        </p>

 <p>
 Нейросеть работает на базе ChatGPT. Она анализирует выбранный набор карт на основе встроенных скриптов.
  </p> <br />
<p>

С ясновидящим можно поболтать, если вам одиноко. Как обычно, всё с оговорками, мол, карты таро справок не дают, а будущее туманно. 
</p> <br />
        </p>
          </div>

          <div data-aos="zoom-out"
               data-aos-offset="1500"
     data-aos-easing="ease-in-sine" className="recept">
<h1 id="rec" className="pet-namer-title">Генератор рецептов</h1>
<a
          href="https://astroguide.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="pet-namer-link"
        >
          https://mealpractice.com/generate
        </a>



     
        <p className="pet-namer-description">
        Нейросеть, которая генерирует рецепт блюда по ингредиентам. Нужно выбрать тип белка — курица, рыба или что-то другое. А дальше — тип питания и кухню. Мы выбрали здоровую еду на базе курятины в мексиканской традиции, нам предложили спайси чикен с лаймом. Резонно.
        <p>Кажется, что от нейросетей тут только название.</p>
        </p>
        <div className="pet-namer-image">
          <img
            src="/recept.webp"
            alt=""
          />
        </div>
        <p className="pet-namer-result">
        Нейросеть даёт на выбор три варианта рецептов:
        <div className="pet-namer-image">
          <img
            src="/recept2.webp"
            alt=""
          />
        </div>
        <p>Но это даже хорошо, потому что составленные вручную и отобранные людьми рецепты, скорее всего, не будут проклятыми. А то с этими нейросетями уже не угадаешь.</p>
        <div className="pet-namer-image">
          <img
            src="/recept4.webp"
            alt=""
          />
        </div>
        </p>
</div>
        

<div data-aos="zoom-out"
               data-aos-offset="2000"
     data-aos-easing="ease-in-sine" className="gendalf">
<h1 id="gen" className="pet-namer-title">Поиграть с Гэндальфом</h1>
<a
          href="https://astroguide.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="pet-namer-link"
        >
         https://gandalf.lakera.ai/
        </a>



     
        <p className="pet-namer-description">
        Игра на основе ИИ, в которой нужно заставить Гэндальфа выдать секретный пароль. Если вам не хватало навыков переговоров — это ваш шанс потренироваться.
        <p></p>
        </p>
        <div className="pet-namer-image">
          <img
            src="/gendalf1.webp"
            alt=""
          />
        </div>
        <p className="pet-namer-result">
        Нейросеть даёт на выбор три варианта рецептов:
        <div className="pet-namer-image">
          <img
            src="/gendalf2.webp"
            alt=""
          />
        </div>
        <p>Но это даже хорошо, потому что составленные вручную и отобранные людьми рецепты, скорее всего, не будут проклятыми. А то с этими нейросетями уже не угадаешь.</p>
        <p>Первые уровни — простые. К пятому уровню становится сложно. Попробуйте пройти дальше без нас.</p>
        </p>
</div>

        </div>
        <Footer />
      </section>
    </>
  );
};

export default Strange;
