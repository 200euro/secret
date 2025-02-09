import React from 'react';
import './Slider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              loop={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <a class="card" href="#">
                  <img alt=""  src="/logo-akmal.png"  />

                  <h2>Akmal Kadirov</h2>
                  <p>My name's Akmal Kadirov, I'm a student of IT Academy </p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
              <a class="card" href="#">
                  <img alt=""  src="/logo-akmal.png"  />

                  <h2>Akmal Kadirov</h2>
                  <p>My name's Akmal Kadirov, I'm a student of IT Academy </p>
                </a>
              </SwiperSlide>
              <SwiperSlide>
                
              <a class="card" href="#">
                  <img alt=""  src="/logo-akmal.png"  />

                  <h2>Akmal Kadirov</h2>
                  <p>My name's Akmal Kadirov, I'm a student of IT Academy </p>
                </a>
              </SwiperSlide>
           
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
