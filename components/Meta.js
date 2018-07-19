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
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        as="style"
      />
      <script
        defer
        src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
      />
      <script defer src="/static/particlesApp.js" />
    </Head>
    <style jsx global>{`
      body {
        margin: 0;
        overflow-x: hidden;
        font-family: "Open Sans", sans-serif;
      }
    `}</style>
  </div>
);
