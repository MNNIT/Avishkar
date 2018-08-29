import Head from "next/head";
export default ({ color }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content={color} />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-68290407-2"
        />
        <script async src="/static/a.js" />
      </Head>
      <style jsx global>{`
        body {
          margin: 0;
          overflow-x: hidden;
          font-family: "Open Sans", sans-serif;
          /*font-family: "Bfont";
        font-weight: 100;*/
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
