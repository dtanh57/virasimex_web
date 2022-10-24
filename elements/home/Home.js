import {Container} from '@mui/system';
import React from 'react';
import BlockBanner from './BlockBanner';
import BlockImages from './BlockImages';
import CustomerQuote from './CustomerQuote';
import Partners from './Partners';
import FeaturedNews from './FeaturedNews';
import OutstandingServices from './OutstandingServices';
import AppImageSwiper from '../../src/AppImageSwiper';

export default function Home({data}) {
  return (
    <Container maxWidth={false} style={{paddingLeft: 0, paddingRight: 0}}>
      <AppImageSwiper data={data?.dataCarouselBanner} />
      <BlockBanner data={data?.dataBlockBanner} />
      <OutstandingServices data={data?.dataOutstandingServices} />
      <CustomerQuote data={data?.dataCustomerQuote} />
      <Partners data={data?.dataPartners} />
      <FeaturedNews data={data?.dataFeaturedNews} />
      <BlockImages data={data?.dataBlockImages} />
    </Container>
  );
}