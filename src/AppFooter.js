import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import AdbIcon from '@mui/icons-material/Adb';
import {Grid, List, ListItem, ListItemText, Typography} from '@mui/material';
import {Box} from '@mui/system';
import useTrans from './hooks/useTrans';

export default function AppFooter() {
  const {Strings, push} = useTrans();

  const pages = [
    {label: Strings.home, value: '/home'},
    {label: Strings.service, value: '/service'},
    {label: Strings.newAndBlog, value: '/service'},
    {label: Strings.portfolio, value: '/newAndBlog'},
    {label: Strings.recruit, value: '/rescruit'}
  ];

  return (
    <footer>
      <Box sx={{display: 'flex', bgcolor: 'primary.main', justifyContent: 'center', pt: 2, width: '100%'}}>
        <Grid container spacing={2} maxWidth='xl'>
          <Grid item sm={4} xs={12} sx={{alignSelf: 'center', textAlign: 'center'}}>
            <AdbIcon sx={{alignSelf: 'center', width: 100, height: 100, color: 'white'}} />
            <Typography color='white'>{Strings.companyName || 'Company Name'}</Typography>
          </Grid>
          <Grid item sm={4} xs={12} sx={{alignSelf: 'center'}}>
            <List dense={false}>
              {[
                {label: '169 Phung Hung - Ha Dong - Ha Noi', icon: (props) => <LocationOnIcon {...props} />},
                {label: 'dtanh57@gmail.com', icon: (props) => <EmailIcon {...props} />},
                {label: '(+84)84-857-1994', icon: (props) => <PhoneEnabledIcon {...props} />}
              ].map((item) => {
                const Icon = (props) => item.icon(props);
                return (
                  <ListItem key={`${item.label}`} sx={{my: 2, width: 'fit-content'}}>
                    <Icon sx={{color: 'white'}} />
                    <ListItemText sx={{m: 0, ml: 1, color: 'white'}} primary={item.label} />
                  </ListItem>
                );
              })}
            </List>
          </Grid>

          <Grid item sm={4} xs={12} sx={{alignSelf: 'center'}}>
            <List dense={false}>
              {pages.map((item) => {
                return (
                  <ListItemText
                    key={`${item.label}`}
                    color='white'
                    sx={{my: 2, cursor: 'pointer', width: 'fit-content', color: 'white'}}
                    onClick={() => push(item.value)}
                    primary={item.label}
                  />
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
