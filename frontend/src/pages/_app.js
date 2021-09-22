import React from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { Router as R } from 'next/dist/client/router';
import App from 'next/app';
import { SSRProvider } from '@react-aria/ssr';

import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

import 'nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../public/css/styles.css';

// This is where we configure the loading bar at the top of the screen when we're moving to the next page.
NProgress.configure({ showSpinner: false });

// Router will have these events that fire based on each page load, we can run NProgress based on them.
R.events.on('routeChangeStart', () => {
  NProgress.start();
});

R.events.on('routeChangeComplete', () => {
  NProgress.done();
});

R.events.on('routeChangeError', () => {
  NProgress.done();
});

function heroImage(pathname) {
  let image = '';
  const params = pathname.split('/');
  let path = `/${params[1]}`;
  switch (path) {
    case '/':
      break;
    case '/about':
      image = '/images/about.png';
      break;
    case '/ministries':
      switch (`${params[2]}`) {
        case 'care-net':
          image = '/images/care-net.png';
          break;
        case 'short-term':
          image = '/images/stm.png';
          break;
        case 'supp-mission':
          image = '/images/supported-missionaries.png';
          break;
        case 'supp-org':
          image = '/images/supported-organizations.png';
          break;
      }
      break;
    case '/resources':
      switch (`${params[2]}`) {
        case 'perspectives':
          image = '/images/perspectives.png';
          break;
        case 'seminars':
          image = '/images/seminars.png';
          break;
        case 'senior-missions':
          image = '/images/senior-missions-training.png';
          break;
        case 'short-term':
          image = '/images/stm-training.png';
          break;
      }
      break;
    default:
      break;
  }

  return image;
}

function MyApp({ Component, pageProps, translation }) {
  const router = useRouter();
  const image = heroImage(router.pathname);
  return (
    <SSRProvider>
      <Header />
      <div className="mx-auto app">
        <Hero router={router} image={image} content={translation.header} />
        <Component translation={translation} {...pageProps} />
        <Footer content={translation.footer} />
      </div>
    </SSRProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const translation = (await import(`../i18n/${appContext.router.locale}.json`))
    .default;
  const appProps = await App.getInitialProps(appContext);
  return { translation, ...appProps };
};

export default MyApp;
