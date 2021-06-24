import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="mx-auto box-border flex h-screen w-screen flex-col place-items-center">
        <Hero />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
