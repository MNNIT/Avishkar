import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#21d4fd" />
      <meta
        name="description"
        content="Avishkar (2018) is the annual techfest of MNNIT,Allahabad,India"
      />

      <link rel="stylesheet" href="/static/styles/theme.css" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro"
        rel="stylesheet"
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
