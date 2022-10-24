import {Box, Typography} from '@mui/material';
import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';
import AppSwiper from '../../src/AppSwiper';
import useTrans from '../../src/hooks/useTrans';

export default function Partners({data}) {
  const {Strings} = useTrans();
  const renderItem = (itm) => {
    return (
      <AppAnimationWhenVisible>
        <img src={itm.img} style={{width: 100, height: 100}} />
      </AppAnimationWhenVisible>
    );
  };

  return (
    <Box sx={{width: '100%', justifyContent: 'center', p: 4}}>
      <Typography fontWeight='bold' variant='h5' textAlign='center' sx={{mb: 4}}>
        {Strings.partners}
      </Typography>
      <AppSwiper
        data={data}
        style={{width: '80%'}}
        renderItem={renderItem}
        pagination={false}
        slidesPerView={8}
        breakpoints={{
          400: {
            slidesPerView: 3
          },
          1106: {
            slidesPerView: 6
          },
          1290: {
            slidesPerView: 8
          }
        }}
      />
    </Box>
  );
}
