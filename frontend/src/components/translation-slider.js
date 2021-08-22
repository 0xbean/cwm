import { useEffect } from 'react';
import Link from 'next/link';

const TranslationSlider = (props) => {
  const { router } = props;

  useEffect(() => {
    // Check to see what the current locale is, if its Korean, toggle the checked status of the input
    if (router.locale !== 'en') {
      document.querySelector('#translation-toggle').checked = true;
    }

    function handleLocaleToggle() {
      document.querySelector('.hidden-link').click();
    }

    document
      .querySelector('#translation-toggle')
      .addEventListener('click', handleLocaleToggle);
    return () => {
      document
        .querySelector('#translation-toggle')
        .removeEventListener('click', handleLocaleToggle);
    };
  });

  return (
    <div className="absolute top-10 right-10 flex items-center justify-center ">
      <div className="flex items-center justify-center w-full mb-12">
        <label
          htmlFor="translation-toggle"
          className="flex items-center cursor-pointer"
        >
          <div className="mr-3 text-gray-700 font-medium select-none">
            English
          </div>
          <div className="relative">
            <input
              id="translation-toggle"
              type="checkbox"
              className="sr-only"
            />

            <Link
              href={router.asPath}
              locale={router.locale === 'en' ? 'ko-KR' : 'en'}
            >
              <a className="hidden-link">hidden locale link</a>
            </Link>

            <div className="w-10 h-4 bg-theme-teal bg-opacity-25 rounded-full shadow-inner"></div>
            <div className="dot absolute w-6 h-6 bg-theme-teal rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium select-none">
            한국어
          </div>
        </label>
      </div>
    </div>
  );
};

export default TranslationSlider;
