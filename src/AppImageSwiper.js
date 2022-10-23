import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {EffectFade, Navigation, Pagination, Autoplay} from 'swiper';
import Image from 'next/image';

export default function AppImageSwiper({data}) {
  return (
    <Swiper
      style={{width: '100%', aspectRatio: 4}}
      spaceBetween={30}
      speed={1500}
      effect={'fade'}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
    >
      {data.map((itm, idx) => {
        return (
          <SwiperSlide key={idx} style={{height: '100%'}}>
            <Image src={itm.img} layout='fill' objectFit='initial' />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
