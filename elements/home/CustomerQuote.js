import {Avatar, Box, Grid, Typography} from '@mui/material';
import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';
import AppSwiper from '../../src/AppSwiper';
import useTrans from '../../src/hooks/useTrans';

export default function CustomerQuote({data}) {
  const {Strings} = useTrans();

  const renderItem = (itm) => {
    return (
      <Box sx={{width: '80%'}}>
        <AppAnimationWhenVisible>
          <Box sx={{backgroundColor: '#DE6538', borderTopRightRadius: 34, borderBottomLeftRadius: 34}}>
            <Typography fontStyle='italic' sx={{color: 'white', p: 2}}>
              {itm.description}
            </Typography>
          </Box>
          <Box
            style={{
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderStyle: 'solid',
              borderWidth: '10px 10px 0px 10px',
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderTopColor: '#DE6538',
              float: 'right',
              marginRight: 20
            }}
          />
          <Grid container sx={{mt: 2, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Grid item sx={{mr: 1.5}}>
              <Typography fontWeight='bold'>{itm.name}</Typography>
              <Typography sx={{textAlign: 'right'}}>{itm.job}</Typography>
            </Grid>
            <Grid item>
              <Avatar sx={{width: 50, height: 50}} src='https://ichef.bbci.co.uk/news/640/cpsprodpb/1354F/production/_86838197_misonsereap.jpg' />
            </Grid>
          </Grid>
        </AppAnimationWhenVisible>
      </Box>
    );
  };

  return (
    <Box sx={{p: 4}}>
      <Typography fontWeight='bold' variant='h1' textAlign='center' sx={{mb: 4}}>
        {Strings.customerQuote}
      </Typography>
      <Grid container justifyContent='center' sx={{width: '100%'}}>
        <Grid item sx={{width: {xs: '100%', lg: '50%', md: '80%'}}}>
          <AppSwiper
            style={{paddingBottom: 50}}
            data={data}
            renderItem={renderItem}
            slidesPerView={2}
            breakpoints={{
              400: {
                slidesPerView: 1
              },
              1106: {
                slidesPerView: 2
              }
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
