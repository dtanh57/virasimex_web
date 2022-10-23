import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {EffectFade, Pagination, Autoplay} from 'swiper';
import {Grid} from '@mui/material';

export default function AppSwiper({data, style, renderItem, ...props}) {
  return (
    <Swiper
      style={style}
      effect={'slide'}
      loop={true}
      pagination={{
        clickable: true
      }}
      speed={1000}
      spaceBetween={20}
      modules={[EffectFade, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      {...props}
    >
      {data.map((itm, idx) => {
        return (
          <SwiperSlide key={idx}>
            <Grid container justifyContent='center'>
              {renderItem(itm)}
            </Grid>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
