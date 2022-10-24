import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';

export default function OutstandingServices({data}) {
  return (
    <Box sx={{py: 4}}>
      <Typography fontWeight='bold' variant='h5' textAlign='center' sx={{mb: 2}}>
        Dịch vụ nổi bật
      </Typography>
      <Grid container justifyContent='center' width='100%'>
        <Grid item container justifyContent='center' sx={{width: {md: '80%', xs: '100%'}}}>
          {data.map((item, index) => {
            return (
              <Grid key={`${index}`} item sx={{mx: 2}}>
                <AppAnimationWhenVisible>
                  <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                      <CardMedia component='img' height='140' image={item.img} alt='green iguana' />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          {item.title}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </AppAnimationWhenVisible>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}
