import React, {} from "react";
import "./Education.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Education = () => {
  // const [products, setProducts] = useState([]);

  // // Загружаем данные при загрузке компонента
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/products") // Берем данные из db.json
  //     .then((response) => setProducts(response.data))
  //     .catch((error) => console.error("Ошибка загрузки данных:", error));
  // }, []);

  return (
    <>
      <section className="education">
        <Header />
        <div className="container">
          <div className="wrap__main__edu">
            <h1>Нейросети для учебы: как использовать для получения новых навыков, решения школьных и студенческих задач</h1>
            <img src="/public/eduimg1.jpg" alt="" />
          </div>

          <div className="ai-container">
      <h1 className="ai-title">Что умеют нейросети для учёбы</h1>
      <p className="ai-paragraph">
        Нейросеть для онлайн-учёбы — универсальный инструмент на базе
        <span className="ai-highlight"> <a href="https://ru.wikipedia.org/wiki/Искусственный_интеллект">искусственного интеллекта</a> </span>, который поможет как получить новые знания, так и решить сложные и непонятные задачи.
      </p>
      <p className="ai-paragraph">Сети наделены следующими возможностями:</p>
      <ul className="ai-list">
        <li>Написание эссе, сочинений, пересказов и других текстовых материалов;</li>
        <li>Подбор источников и списков литературы как для научных работ, так и для индивидуального обучения;</li>
        <li>Перевод текстов с любых языков;</li>
        <li>Трансформация речи в текст и наоборот, расшифровка/озвучка аудио- и видео;</li>
        <li>Проверка ошибок и правильности выполнения заданий;</li>
        <li>
          Изучение иностранных языков, включая общение (переписку) с носителями
          (их роль выполняет нейронка);
        </li>
        <li>Решение математических и других задач;</li>
        <li>Прохождение тестов;</li>
        <li>Подготовка к единому государственному экзамену;</li>
        <li>
          Сжатие длинных текстов, видео и аудиофайлов до нескольких предложений, в
          которых отображена основная информация;
        </li>
        <li>Проектирование учебных планов под запросы пользователя;</li>
        <li>Создание презентаций, графиков и диаграмм, структурирование информации.</li>
      </ul>
      <p className="ai-paragraph">
        Мы перечислили основной функционал, на самом деле возможностей больше, главное — правильно подобрать и использовать нейронку. Существуют универсальные варианты, которые умеют всё, другие — узкопрофильные, например, создают только презентации или пишут тексты.
      </p>
    </div>

    <div className="ai-container">
      

      <section className="gemini-section">
        <h2 className="ai-title">1. Gemini</h2>
        <p className="ai-paragraph">
          Бесплатная нейросеть для учёбы <span className="ai-highlight"> <a href="https://gemini.google.com/app">Gemini</a></span> — продукт компании Google, она доступна в десктопной версии, также ей можно заменить классического Ассистента в мобильных устройствах под управлением Android. Нейронка позволяет:
        </p>
        <ul className="ai-list">
          <li>писать тексты, включая сочинения, эссе, рефераты и иное;</li>
          <li>проводить проверку на ошибки;</li>
          <li>выполнять перевод;</li>
          <li>
            изучать иностранные языки, например, можно попросить нейросеть выступить в
            качестве носителя, чтобы практиковать письменную речь;
          </li>
          <li>
            составлять индивидуальные тесты для проверки знаний, учебные планы и
            программы;
          </li>
          <li>
            решать задачи — от простых для начальной школы до сложных по высшей
            математике + пошаговые пояснения, что позволяет разобраться в непонятных
            моментах и правильно интерпретировать результат;
          </li>
          <li>
            искать источники для учебных работ — это как сайты, так и соответствующую
            литературу.
          </li>
        </ul>
        <div className="mathgpt-image-wrapper">
        <img src="/GEmini.jpg" className="mathgpt-image" />
        <p className="">Просим Gemini составить план для эссе</p>
      </div>
        <p className="ai-paragraph">
          Поддерживается текстовое и голосовое распознавание, загрузка файлов + полная интеграция со всеми сервисами Google. Нейронка универсальна, что позволяет привлекать её в качестве помощника на любом этапе прохождения обучения.
        </p>
        <p className="ai-paragraph">
          <strong>Условия использования:</strong> Доступна бесплатная версия, но пользователям вправе перейти на более умную подписку с расширенными функциями — Gemini Advanced.
        </p>
      </section>
    </div>


    <div className="mathgpt-container">
      <h2 className="mathgpt-title">3. MathGPT</h2>
      <p className="mathgpt-description">
        Нейросеть <span className="mathgpt-highlight"> <a href="https://www.mathgpt.com/">MathGPT</a></span> – инновационный продукт на основе
        искусственного интеллекта, созданный для решения математических задач разного уровня сложности.
        Интегралы, уравнения, производные – нейронка понравится как школьникам и студентам, так и опытным
        специалистам в области точных наук. <strong>Поддерживает текстовые запросы, загрузку картинок и формул.</strong> 
        Работает с разными типами математических объектов + генерирует новые задачи/формулы, что необходимо
        для самообучения и подготовки учебных материалов.
      </p>

      <div className="mathgpt-image-wrapper">
        <img src="/mathGpt.jpg" alt="Интерфейс MathGPT" className="mathgpt-image" />
        <p className="mathgpt-caption">Так выглядит интерфейс MathGPT</p>
      </div>

      <div className="mathgpt-usage">
        <h3 className="mathgpt-usage-title">Условия использования</h3>
        <p className="mathgpt-usage-text">
          Для старта требуется прохождение регистрации через код-подтверждение, который будет отправлен
          на указанный телефонный номер. Дальнейшее взаимодействие – бесплатно.
        </p>
      </div>
    </div>

    <div className="any-summary-container">
      <h2 className="any-summary-title">7. Any Summary</h2>
      <p className="any-summary-description">
        Нейросеть <span className="any-summary-highlight"> <a href="https://www.anysummary.app/">Any Summary</a></span> работает на базе ChatGPT, ориентирована на большие тексты:
      </p>
      <ul className="any-summary-features">
        <li>осуществляет быстрый анализ;</li>
        <li>проводит резюмирование;</li>
        <li>выделяет ключевые моменты и цитаты;</li>
        <li>формирует аннотации и маркированные пункты.</li>
      </ul>
      <p className="any-summary-additional-info">
        Можно добавить ссылку на документ/страницу в сети или загрузить собственный файл объемом до 100 мегабайт. 
        Есть чат, здесь задаются параметры аннотации и вопросы по тексту. Функционал обширный, поддерживаются русский, 
        английский и другие языки, результаты доступны к скачиванию.
      </p>
      <p className="any-summary-conditions">
        <strong>Условия использования.</strong> Нейросеть бесплатная, лимитов нет.
      </p>
      <div className="any-summary-image-wrapper">
        <img src="/public/Summary.jpg" alt="" className="any-summary-image" />
        <p className="any-summary-caption">Возможности Any Summary</p>
      </div>
    </div>



 

        </div>
        <Footer />
      </section>
    </>
  );
};

export default Education;
