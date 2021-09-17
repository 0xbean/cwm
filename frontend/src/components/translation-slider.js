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
    <div className="translation-slider__container">
      <label
        className="form-check-label translation-slider__container-label"
        htmlFor="translation-toggle"
      >
        English
      </label>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="translation-toggle"
        />
        <Link
          href={router.asPath}
          locale={router.locale === 'en' ? 'ko-KR' : 'en'}
        >
          <a className="hidden-link">hidden locale link</a>
        </Link>
      </div>
      <label
        className="form-check-label translation-slider__container-label"
        htmlFor="translation-toggle"
      >
        한국어
      </label>
    </div>
  );
};

export default TranslationSlider;
