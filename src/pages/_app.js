import "../../styles/cssReset.css";
import "../../styles/globals.css";
import "../../styles/styles.css";
import Footer from "../components/footer";
import Header from "../components/header";
import NavBar from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
