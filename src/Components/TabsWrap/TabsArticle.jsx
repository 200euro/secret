// import React from 'react';
// import './TabsArticle.scss';
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
// import { Link } from 'react-router-dom';

// const TabsArticle = () => {
//   return (
//     <div className="tabs-content">
//       <Tabs>
//         <TabList>
//           <Link to="/Akmal"><Tab>Универсальные 1</Tab></Link>
//           <Link to="/Akmal"><Tab>Учёба 2</Tab></Link>
//           <Link to="/Akmal"><Tab>Генерация видео и изображений 3 </Tab></Link>
//           <Link to="/Akmal"><Tab>Странные или другие 4</Tab></Link>
         
//         </TabList>

//         {/* <TabPanel>
//           <h2>Any content 1</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 3</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 4</h2>
//         </TabPanel> */}
//       </Tabs>
//     </div>
//   );
// };

// export default TabsArticle;


import React from 'react';
import './TabsArticle.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Link } from 'react-router-dom';


const TabsArticle = () => {
  return (
    <div className="tabs-content">
      <Tabs>
        {/* Контейнер с горизонтальной прокруткой */}
        <TabList className="scrollable-tab-list">
          <Link to="/Universal">
            <Tab>Универсальные</Tab>
          </Link>
          <Link to="/Edu">
            <Tab>Учёба</Tab>
          </Link>
          <Link to="/gen">
            <Tab>Генерация видео и изображений</Tab>
          </Link>
          <Link to="/strange">
            <Tab>Странные или другие</Tab>
          </Link>
          
        </TabList>
      </Tabs>
    </div>
  );
};

export default TabsArticle;
