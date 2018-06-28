import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link
        href="https://fonts.googleapis.com/css?family=Merienda"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Faster+One"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" />
      <script src="static/particlesApp.js" />
    </Head>
    <style jsx global>{`
      @font-face {
        font-family: "Bfont";
        src: url("static/font/BurbankBigCondensed-Black.otf");
      }
      body {
        margin: 0;
        overflow-x: hidden;
        font-family: "Open Sans", sans-serif;
        /*font-family: "Bfont";
        font-weight: 100;*/
      }
    `}</style>
  </div>
);
