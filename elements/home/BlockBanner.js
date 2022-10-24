import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';
import {Button, Grid, Typography} from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';

export default function BlockBanner({data}) {
  return (
    <>
      {(data || []).map((item, index) => {
        return (
          <Grid key={`${index}`} container sx={{p: 10, backgroundColor: item.backgroundColor}}>
            <Grid
              item
              lg={6}
              xs={12}
              alignSelf='center'
              textAlign='center'
              sx={{display: {md: item.imgLeft ? 'block' : 'none', xs: 'block'}, mb: {xs: 2}}}
            >
              <AppAnimationWhenVisible>
                <img alt={item.title} src={item.img} style={{maxWidth: '100%', height: 'auto'}} layout='fill' objectFit='contain' />
              </AppAnimationWhenVisible>
            </Grid>
            <Grid item lg={6} xs={12} alignSelf='center'>
              <AppAnimationWhenVisible>
                <Typography variant='h1' fontWeight='bold' sx={{mb: 2, color: item.textColor}}>
                  {item.title}
                </Typography>
              </AppAnimationWhenVisible>
              <AppAnimationWhenVisible>
                <Typography variant='h5' sx={{color: item.textColor, mb: 2}}>
                  {item.content}
                </Typography>
              </AppAnimationWhenVisible>
              {Boolean(item.btnTitle) && (
                <AppAnimationWhenVisible>
                  <Button variant='contained' sx={{color: item.textColor}} onClick={item.btnOnClick} endIcon={<ForwardIcon />}>
                    {item.btnTitle}
                  </Button>
                </AppAnimationWhenVisible>
              )}
            </Grid>
            <Grid item lg={6} xs={12} alignSelf='center' textAlign='center' sx={{display: {md: !item.imgLeft ? 'block' : 'none', xs: 'none'}}}>
              <AppAnimationWhenVisible>
                <img alt={item.title} src={item.img} style={{maxWidth: '100%', height: 'auto'}} layout='fill' objectFit='contain' />
              </AppAnimationWhenVisible>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
