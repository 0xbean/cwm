import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { Router as R } from 'next/dist/client/router';
import { SSRProvider } from '@react-aria/ssr';
import App from 'next/app';

import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import { heroImage } from '../../util/helper';

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

function MyApp({ Component, pageProps, translation }) {
  const router = useRouter();
  const image = heroImage(router.pathname);

  return (
    <SSRProvider>
      <Header />
      <div className="mx-auto app">
        <Hero router={router} image={image} translation={translation} />
        <Component translation={translation} {...pageProps} />
        <Footer translation={translation} />
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
