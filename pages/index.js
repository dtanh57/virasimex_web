import * as React from 'react';
import AppLayout from '../src/AppLayout';
import Home from './home';

export default function Index() {
  return (
    <AppLayout widhHeader withFooter>
      <Home />
    </AppLayout>
  );
}
