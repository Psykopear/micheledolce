import Header from "../components/header.js";
import Head from "next/head";
import "../styles/styles.scss";

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Michele Dolce - Research Assistant in Mathematics at Imperial College London" />
        <title>Michele Dolce</title>
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Inconsolata" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default App;
