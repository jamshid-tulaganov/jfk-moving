import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";
import Image1 from "../../assets/images/clients/image1.svg";
import Image2 from "../../assets/images/clients/image2.svg";
import Image3 from "../../assets/images/clients/image3.svg";
import Image4 from "../../assets/images/clients/iamge4.svg";
import Image5 from "../../assets/images/clients/image5.svg";
import Image6 from "../../assets/images/clients/image6.svg";

function ClientComponent() {
    return(
        <>
          <div className="container">
              <div className="clientCon-heading">
                  <h1 className='clientCon__header headTxt'>Proud Clients of JFK Moving</h1>
              </div>
              <div className="container client__carousel--container">
                   <Swiper
                       modules={[Navigation, Pagination, Scrollbar, A11y]}
                       spaceBetween={0}
                       slidesPerView={6}
                       navigation
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}
                   >
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image1} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image2} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image3} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image4} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image5} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image6} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image6} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image6} alt="clients"/>
                           </div>
                       </SwiperSlide>
                       <SwiperSlide>
                           <div className="carousel__image">
                               <img src={Image6} alt="clients"/>
                           </div>
                       </SwiperSlide>
                   </Swiper>
              </div>
          </div>
        </>
    )
}

export default ClientComponent