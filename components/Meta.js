import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Avishkar 2018 | MNNIT Allahabad </title>
      <meta name="theme-color" content="#21d4fd" />
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
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <script
        defer
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
      />
      <script defer src="/static/particlesApp.js" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"
        type="text/css"
      />
    </Head>
    <style jsx global>{`
      @font-face {
        font-family: "heading";
        src: url("/static/font/neon2.ttf") format("truetype");
      }
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
