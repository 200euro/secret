import React, { } from 'react';
import './Universal.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Universal = () => {


  return (
    <>
  
      <section className="Universal">
          <Header/>
        <div className="container">
          <div  data-aos="zoom-in-up"   data-aos-duration="1500" className="universal__wrap">
            <img src="/public/igorvoytemko.gif" alt="" />
            <h1> Мощные нейросетей для любых задач</h1>
            <h2>
              Классные онлайн-сервисы, которые напишут для вас статью, нарисуют
              логотип, озвучат текст, создадут презентацию и сделают многое
              другое.
            </h2>{' '}
            <br />
          </div>

          <div data-aos="fade-up"
     data-aos-duration="3000" className="universal__wrap2">
            <p  >
              Универсального ИИ, который умеет абсолютно всё, пока не изобрели.
              Зато уже сейчас есть целая россыпь онлайн-сервисов, которым можно
              поручить любую задачу, связанную с текстом, картинками, видео,
              кодом, дизайном и даже игровой разработкой.
            </p>
            <br />
            <p>
              На этом сайте я собрал для вас продвинутые нейросети, которыми
              можно пользоваться уже сейчас, — почти все из них имеют бесплатный
              пробный период и работают в России без ограничений.{' '}
            </p>
            <br />
            <p>
              Выбирайте, что хотите сгенерировать, и проникайтесь магией ИИ:
            </p>
            <br />
          </div>



 
           <div data-aos="fade-up"
     data-aos-duration="3000" className="box__quest">
            <ul className="circle-list">
              <div className="div1">
                <li>
                  <a href="#TEXt">Текст</a>
                </li>
                <li>
                  <a href="#image">Картинки</a>
                </li>
                <li>
                  <a href="#">Музыка и голос</a>
                </li>
              </div>

              <div className="div">
                <li>
                  <a href="#">Видео</a>
                </li>
                <li>
                  <a href="#">Код</a>
                </li>
                <li>
                  <a href="#">Документы и презентации</a>
                </li>
              </div>
            </ul>
          </div> 

          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" id="TEXt" className="tekstAi__wrap">
            <h1>Нейросети для генерации текста</h1>
            <h1>ChatGPT</h1>
            <br />
            <p>
              Знаменитый <a href="https://openai.com/index/gpt-4/">чат-бот</a>{' '}
              от OpenAI с искусственным интеллектом на борту, который может
              поддерживать диалог, в том числе на русском языке, писать статьи,
              сочинять стихи, отвечать на вопросы, давать советы и даже спорить.
              Его ответы можно корректировать с помощью наводящих вопросов.
            </p>{' '}
            <br />
            <h1>Ещё нейросеть умеет:</h1>
            <ul className="circle-list">
              <div className="div__text">
                <li>
                  Писать код, анализировать его, переводить с одного языка
                  программирования на другой.
                </li>
                <br />
                <li>
                  Генерировать сценарии, например создавать новые эпизоды для
                  сериалов или игры по мотивам фильмов.
                </li>
                <br />
                <li>
                  Давать медицинские советы. Как правило, она предупреждает, что
                  нужно обратиться к врачу.
                </li>
                <br />
                <li>Переводить текст с одного языка на другой.</li>
                <br />
                <p className="mini">
                  (Коммон, думаю много о нем говорить не стоит все знают как его
                  использовать)
                </p>
              </div>
            </ul>
          </div>

          <div className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong> бесплатно. (но наглеть не
                надо)
              </p>
              <p>
                <strong>Насколько доступный:</strong> да.
              </p>
              <p>
                <strong>Насколько язычный:</strong> 50.
              </p>
            </div>

            <a href="https://openai.com/index/gpt-4/" className="try">
              ПОПРОБОВАТЬ
            </a>
          </div>

          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="tekstAi__wrap">
            <h1>Hypotenuse AI </h1>
            <br />
            <p>
              Это онлайн-сервис для создания статей и маркетинговых материалов
              на основе нескольких ключевых слов.{' '}
              <a href="https://www.hypotenuse.ai/">Hypotenuse AI </a>пишет
              рекламные тексты, посты в социальных сетях, слоганы и заголовки,
              описания продуктов по фотографиям. Ещё она генерирует записи в
              блогах и создаёт изображения по описаниям.
            </p>{' '}
            <br />
            <img src="/public/primerHypotenuese.png" alt="" />
            <p>Пример диалога с Hypotenuse AI </p> <br />
          </div>

          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong> от 15 долларов в месяц{' '}
              </p>
              <p>
                <strong>Насколько доступный:</strong> да, в течение семи дней.
              </p>
              <p>
                <strong>Насколько язычный:</strong> да.{' '}
              </p>
            </div>

            <a href="https://www.hypotenuse.ai/" className="try">
              ПОПРОБОВАТЬ
            </a>
          </div>

          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="tekstAi__wrap">
            <h1>Rytr</h1>
            <br />
            <p>
              Ещё одна <a href="https://app.rytr.me/">нейросеть</a>, которая
              создаёт текст на основе заданных параметров. Онлайн-сервис
              предлагает несколько вариантов генерации с разным стилем: тексты
              для блога, презентации, сопроводительные письма, контент для
              соцсетей, статьи в формате «вопрос — ответ» и многое другое.
            </p>{' '}
            <br />
            <img src="/rytr.png" alt="" /> <p>Пример диалога с Rytr</p>
            <p>
              Также Rytr предоставляет советы по улучшению структуры и
              исправлению орфографических ошибок в тексте, даёт рекомендации по
              SEO. Кроме того, она переводит тексты и может создавать
              иллюстрации к статьям, но это у неё пока получается не очень
              хорошо.
            </p>
          </div>

          <div className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong> от 29 долларов в месяц.
                (чета много)
              </p>
              <p>
                <strong>Насколько доступный:</strong> можно бесплатно
                генерировать до 10 000 символов в месяц.
              </p>
              <p>
                <strong>Насколько язычный:</strong> да.{' '}
              </p>
            </div>

            <a href="https://app.rytr.me/" className="try">
              ПОПРОБОВАТЬ
            </a>
          </div>

          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="audio">
        <div className="container">
          <div id="image" className="tekstAi__wrap">
            <h1>Нейросети для работы с аудио</h1>

            <h1>MacWhisper</h1>
            <br />

            <p>
              Мощная{' '}
              <a href="https://goodsnooze.gumroad.com/l/macwhisper">
                программа
              </a>{' '}
              для преобразования аудио в текст на устройствах с macOS. Работает
              на базе продвинутой нейросети Whisper от компании OpenAI,
              разработчика ChatGPT. Поможет расшифровать многочасовые записи
              лекций, интервью или конференций — и всё это за несколько секунд и
              без доступа к интернету. Поддерживает более 100 языков, в том
              числе и русский.
            </p>
            <img src="/public/audio.png" alt="" />

            <p>Примеры работ MacWhisper</p>
          </div>

          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong>бесплатно
              </p>
              <p>
                <strong>Насколько доступный:</strong>да.
              </p>
              <p>
                <strong>Насколько язычный:</strong> да.{' '}
              </p>
            </div>

            <a
              href="https://goodsnooze.gumroad.com/l/macwhisper"      
              className="try"
            >
              ПОПРОБОВАТЬ
            </a>
          </div>
        </div>
      </div>


      <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="imagecreate">
        <div className="container">
          <div id="image" className="tekstAi__wrap__image">
            <h1>Нейросети для генерации изображений</h1>

            <h1>Midjourney</h1>
            <br />

            <p>
              Самая популярная{' '}
              <a href="https://www.midjourney.com/home?callbackUrl=%2Fapp%2F">
                нейронка
              </a>{' '}
              для генерации картинок. Умеет рисовать не только по тексту, но и
              на основе пользовательских картинок. Можно указать и стиль
              иллюстрации — например, аниме, киберпанк или реализм. Встроенный
              ИИ генерирует четыре изображения, из которых пользователь может
              выбрать самое лучшее и получить его в высоком разрешении.
            </p>
            <img src="/public/midjourney.png" alt="" />
            <img
              className="scale"
              src="/public/midjourneyscale_1200.png"
              alt=""
            />
            <p>Примеры работ Midjourney </p>
          </div>

          <div className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong> от 10 долларов в месяц.
              </p>
              <p>
                <strong>Насколько доступный:</strong> Пробная версия не
                предоставляется с марта 2023 года.{' '}
              </p>
              <p>
                <strong>Насколько язычный:</strong> да.{' '}
              </p>
            </div>

            <a
              href="https://www.midjourney.com/home?callbackUrl=%2Fapp%2F"
              className="try"
            >
              ПОПРОБОВАТЬ
            </a>
          </div>

          <div className="tekstAi__wrap">
            <h1>Flair</h1>
            <br />

            <p>
              {' '}
              <a href="https://dream.ai/create">Генератор изображений</a> по
              текстовому запросу. В отличие от многих конкурентов, имеет своё
              мобильное приложение — для Android и iOS. Картинки генерируются в
              вертикальной ориентации, поэтому их удобно использовать в качестве
              обоев для смартфона. Можно выбрать стиль изображения, хотя
              большинство предлагаемых стилей платные.
            </p>
            <img className="dream" src="/public/dereambamboo.png" alt="" />

            <p>Пример сайта Flair </p>
          </div>

          <div className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong>бесплатно, но с
                ограничениями по длине запроса, выбору стилей и количеству
                создаваемых изображений. Если хотите больше возможностей, можно
                подключить платный тариф — от 10 долларов в месяц.
              </p>
              <p>
                <strong>Насколько доступный:</strong> премиум-версия доступна
                бесплатно в течение трёх дней.{' '}
              </p>
              <p>
                <strong>Насколько язычный:</strong> да.{' '}
              </p>
            </div>

            <a href="https://dream.ai/create" className="try">
              ПОПРОБОВАТЬ
            </a>
          </div>

          <div className="tekstAi__wrap">
            <h1>Looka</h1>
            <br />

            <p>
              <a href="https://looka.com/">Генератор логотипов</a> на базе
              искусственного интеллекта. Онлайн-сервис предназначен для
              предпринимателей, владельцев малого бизнеса и небольших компаний,
              которые хотят сэкономить на услугах дизайнеров. В качестве
              референса можно выбрать готовые образцы логотипов.
            </p>
            <img src="/public/looka.png" alt="" />

            <p>Пример сайта Looka </p>
          </div>

          <div className="div__card">
            <div className="info-card">
              <p>
                <strong>Насколько халявный:</strong> от 20 долларов за базовую
                версию. Если нужно лого в высоком разрешении и с возможностью
                редактирования, потребуется премиум-тариф, который стоит от 65
                долларов.
              </p>
              <p>
                <strong>Насколько доступный:</strong>да, в течение 7 дней.{' '}
              </p>
              <p>
                <strong>Насколько язычный:</strong> да.{' '}
              </p>
            </div>

            <a href="https://dream.ai/create" className="try">
              ПОПРОБОВАТЬ 
            </a>
          </div>
        </div>
      </div>


                  
        </div>
        <Footer/>
      </section>

  

     

    </>
  )
}

export default Universal;
