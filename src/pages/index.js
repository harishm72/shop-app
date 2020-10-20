import Head from "next/head";
import LandingPage from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Online Shop</title>

        <link rel="stylesheet" href="/cssReset.css" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="icon" href="../images/shop-icon-32.png" />
      </Head>
      <LandingPage />
    </div>
  );
}
