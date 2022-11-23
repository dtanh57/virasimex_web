import {Box, Typography} from '@mui/material';
import React from 'react';
import AppAnimationWhenVisible from '../../src/AppAnimationWhenVisible';
import useTrans from '../../src/hooks/useTrans';

export default function Description({data}) {
  const {language} = useTrans();

  return (
    <Box style={{padding: "0px 40px"}}>
      <AppAnimationWhenVisible>
        <div dangerouslySetInnerHTML={{__html: data[language]}}></div>
      </AppAnimationWhenVisible>
    </Box>
  );
}
