import Head from "next/head";
export default ({ color }) => {
  return (
    <div>
      <Head>
        <link rel="manifest" href="/static/app-images/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Avishkar 2018 | MNNIT Allahabad </title>
        <meta name="theme-color" content="black" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <script src="/static/nprogress.js" />
        <link rel="stylesheet" href="/static/styles/nprogress.css" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-68290407-2"
        />
        <script async src="/static/a.js" />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        <link
          rel="icon"
          sizes="16x16 32x32 64x64"
          href="/static/favicon/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/static/favicon/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="/static/favicon/favicon-160.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/static/favicon/favicon-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/static/favicon/favicon-64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicon/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicon/favicon-16.png"
        />
        <link rel="apple-touch-icon" href="/static/favicon/favicon-57.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicon/favicon-114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicon/favicon-72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicon/favicon-144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicon/favicon-60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicon/favicon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicon/favicon-76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicon/favicon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicon/favicon-180.png"
        />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/static/favicon/favicon-144.png"
        />
        <meta
          name="msapplication-config"
          content="/static/favicon/browserconfig.xml"
        />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          overflow-x: hidden;
          font-family: "Open Sans", sans-serif;
        }
        @media (max-width: 700px) {
          body {
            padding-top: 44px;
          }
        }
      `}</style>
    </div>
  );
};
