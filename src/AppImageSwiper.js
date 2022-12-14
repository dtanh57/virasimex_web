import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {EffectFade, Navigation, Pagination, Autoplay} from "swiper";
import Image from "next/image";
import {Box} from "@mui/system";

export default function AppImageSwiper() {
  const images = ['/virasimex_banner_1.jpeg', '/virasimex_banner_2.jpeg', '/virasimex_banner_3.jpeg', '/virasimex_banner_4.jpeg', '/virasimex_banner_5.jpeg', '/virasimex_banner_6.jpeg', '/virasimex_banner_7.jpeg', '/virasimex_banner_8.jpeg'];

  return (
    <Swiper
      spaceBetween={30}
      speed={1500}
      effect={"fade"}
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination, Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
    >
      {images?.map?.((itm, idx) => {
        return (
          <SwiperSlide key={idx} style={{height: "100%"}}>
            <Box sx={{width: "100vw", height: "56.25vw"}}>
              <Image src={itm} layout="fill" />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
