import Head from "next/head";
export default () => (
  <div>
    <Head>
      <link rel="manifest" href="/static/app-images/manifest.json" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Avishkar 2018 | MNNIT Allahabad </title>
      <meta
        name="google-site-verification"
        content="zSLbvACdG_0nQfnNcQon7CA0tuYxAy5dLjQpeVgFAcc"
      />
      <meta name="theme-color" content="black" />
      <meta
        name="description"
        content="Avishkar (2018) is the annual techfest of MNNIT, Allahabad.This is the concoction level of Avishkar that inspires every
        brain out there to ideate ,innovate and create. Step up and get ready for this extravaganza!!"
      />

      <meta
        name="keywords"
        content="Avishkar, 2k18, 2018, avishkar 2k18,technology,motilal nehru,motilal nehru national institude of technology, avishkar 2018, annual techfest,MNNIT Allahabad, NIT Allahabad, NIT,India,cyberquest,gnosomania,gnotalks,allahabad"
      />

      <link rel="stylesheet" href="/static/styles/theme.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
      />
      <script src="/static/nprogress.js" />
      <link rel="stylesheet" href="/static/styles/nprogress.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
        type="text/css"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-68290407-2"
      />
      <script async src="/static/a.js" />
      <meta
        name="google-signin-scope"
        content="https://www.googleapis.com/auth/spreadsheets"
      />
      <meta
        name="google-signin-client_id"
        content="358161711406-nvle0nruv96vock0270b3dgcr3j7it8h.apps.googleusercontent.com"
      />
      <script src="https://apis.google.com/js/platform.js" async defer />
    </Head>
    <style jsx global>{`
      @font-face {
        font-family: "rustico";
        src: url("/static/font/Rustico-Regular.otf");
      }
      body {
        margin: 0;
        overflow-x: hidden;
        font-family: "Source Sans Pro", sans-serif;
      }
    `}</style>
  </div>
);
