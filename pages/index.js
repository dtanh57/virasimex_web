import Head from "next/head";
import * as React from "react";
import Home from "../elements/home/Home";
import AppLayout from "../src/AppLayout";
import useTrans from "../src/hooks/useTrans";

export default function Index({ data }) {
  const { Strings } = useTrans();

  return (
    <AppLayout widhHeader withFooter>
      <Head>
        <title>Vinasimex | トップ | ヴィラシメックス/VIRASIMEX</title>
        <meta name="description" content="Vinasimex home page" />
        <meta
          name="description"
          content="ベトナム送り出し機関の老舗として当校は軌道整備保全に求められるサービスを創造して行きます。当校のプログラムは柔軟性に富み、教鞭をとるのは専任講師たちばかりです。詳細については直接お問い合わせください。"
        />
        <meta property="og:error" content="Error virasimex web" />
        <meta
          property="og:title"
          content="トップ | ヴィラシメックス/VIRASIMEX"
        />
        <meta
          property="og:description"
          content="ベトナム送り出し機関の老舗として当校は軌道整備保全に求められるサービスを創造して行きます。当校のプログラムは柔軟性に富み、教鞭をとるのは専任講師たちばかりです。詳細については直接お問い合わせください。"
        />
        <meta property="og:url" content="https://www.virasimex.net" />
        <meta property="og:site_name" content="ヴィラシメックス/VIRASIMEX" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="トップ | ヴィラシメックス/VIRASIMEX"
        />
        <meta
          name="twitter:description"
          content="ベトナム送り出し機関の老舗として当校は軌道整備保全に求められるサービスを創造して行きます。当校のプログラムは柔軟性に富み、教鞭をとるのは専任講師たちばかりです。詳細については直接お問い合わせください。"
        />
      </Head>
      {/* <Home data={data} /> */}
    </AppLayout>
  );
}

export async function getStaticProps() {
  const res = await fetch(process.env.REACT_APP_API + "/api/home");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
