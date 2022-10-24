import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import {Box} from '@mui/system';
import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';
import useTrans from '../../src/hooks/useTrans';

export default function OutstandingServices({data}) {
  const {Strings} = useTrans();
  return (
    <Box sx={{py: 4}}>
      <Typography fontWeight='bold' variant='h1' textAlign='center' sx={{mb: 2}}>
        {Strings.outstandingService}
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
