import '../styles/globals.css';
import Header from '../components/header.js';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
