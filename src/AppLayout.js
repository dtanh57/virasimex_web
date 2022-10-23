import React from 'react';
import Container from '@mui/material/Container';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default function AppLayout({children, withFooter, widhHeader}) {
  return (
    <Container disableGutters maxWidth={false} sx={{p: 0, m: 0, minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      {widhHeader && <AppHeader />}
      <main style={{flex: 1}}>{children}</main>
      {withFooter && <AppFooter />}
    </Container>
  );
}
