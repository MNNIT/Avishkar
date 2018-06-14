import Head from "next/head";
export default () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Merienda" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
        </Head>
        <style jsx global>{`
        body{
            margin: 0;
            font-family: 'Open Sans', sans-serif;
        }
    `}</style>
    </div>
)