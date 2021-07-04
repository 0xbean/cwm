import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { Router as R } from 'next/dist/client/router';
import App from 'next/app';

import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

import 'tailwindcss/tailwind.css';

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
  console.log(translation);

  return (
    <>
      <Header />
      <div className="mx-auto box-border flex h-screen w-screen flex-col place-items-center">
        <Hero router={router} content={translation.header} />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const translation = (await import(`../i18n/${appContext.router.locale}.json`))
    .default;
  const appProps = await App.getInitialProps(appContext);
  return { translation, ...appProps };
};

export default MyApp;
