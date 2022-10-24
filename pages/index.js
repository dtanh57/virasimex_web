import Head from 'next/head';
import * as React from 'react';
import Home from '../elements/home/Home';
import AppLayout from '../src/AppLayout';
import useTrans from '../src/hooks/useTrans';

export default function Index({data}) {
  const {Strings} = useTrans();

  return (
    <AppLayout widhHeader withFooter>
      <Head>
        <title>Vinasimex | {Strings.home}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Vinasimex home page' key='Vinasimex home page' />
      </Head>
      {/* <Home data={data} /> */}
    </AppLayout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(process.env.REACT_APP_API + '/api/home');
//   const data = await res.json();

//   return {
//     props: {
//       data
//     }
//   };
// }
