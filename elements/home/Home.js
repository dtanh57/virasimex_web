import {Container} from "@mui/system";
import React from "react";
import SelectionReason from "./SelectionReason";
import CustomerQuote from "./CustomerQuote";
import Partners from "./Partners";
import FeaturedNews from "./FeaturedNews";
import OutstandingServices from "./OutstandingServices";
import AppImageSwiper from "../../src/AppImageSwiper";
import Description from './Description';

export default function Home({data}) {
  return (
    <Container maxWidth={false} style={{paddingLeft: 0, paddingRight: 0}}>
      <AppImageSwiper />
      <Description data={data?.dataDescription} />
      <SelectionReason />
      <OutstandingServices data={data?.dataOutstandingServices} />
      <CustomerQuote data={data?.dataCustomerQuote} />
      <Partners data={data?.dataPartners} />
      <FeaturedNews data={data?.dataFeaturedNews} />
    </Container>
  );
}
