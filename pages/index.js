import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import Home from '../elements/home/Home';
import {dataHome} from '../public/mock';
import AppLayout from '../src/AppLayout';

export default function Index({data}) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <AppLayout widhHeader withFooter>
      <Head>
        <title>Vinasimex | トップ | ヴィラシメックス/VIRASIMEX</title>
        <meta name='description' content='Vinasimex home page' />
        <meta
          name='description'
          content='ベトナム送り出し機関の老舗として当校は軌道整備保全に求められるサービスを創造して行きます。当校のプログラムは柔軟性に富み、教鞭をとるのは専任講師たちばかりです。詳細については直接お問い合わせください。'
        />
        <meta property='og:error' content='Vinasimex Og metadata is not valid' />
        <meta
          property='og:image'
          content='https://static.wixstatic.com/media/8949f6_bc08f81190014dd9ba1f39b6bfd97d74~mv2.jpg/v1/fill/w_2500,h_1991,al_c/8949f6_bc08f81190014dd9ba1f39b6bfd97d74~mv2.jpg'
        />
        <meta property='og:image:width' content='2500' />
        <meta property='og:image:height' content='1991' />
        <meta property='og:title' content='トップ | ヴィラシメックス/VIRASIMEX' />
        <meta
          property='og:description'
          content='ベトナム送り出し機関の老舗として当校は軌道整備保全に求められるサービスを創造して行きます。当校のプログラムは柔軟性に富み、教鞭をとるのは専任講師たちばかりです。詳細については直接お問い合わせください。'
        />
        <meta property='og:url' content='https://www.virasimex.net' />
        <meta property='og:site_name' content='ヴィラシメックス/VIRASIMEX' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='トップ | ヴィラシメックス/VIRASIMEX' />
        <meta
          name='twitter:description'
          content='ベトナム送り出し機関の老舗として当校は軌道整備保全に求められるサービスを創造して行きます。当校のプログラムは柔軟性に富み、教鞭をとるのは専任講師たちばかりです。詳細については直接お問い合わせください。'
        />
      </Head>
      {hydrated && <Home data={data} />}
    </AppLayout>
  );
}

export async function getStaticProps() {
  // const res = await fetch(process.env.REACT_APP_API + '/api/home');
  const res = {};
  let data = {};
  if (res.dataCarouselBanner) {
    data = await res.json();
  }
  data = dataHome;

  return {
    props: {
      data
    }
  };
}
