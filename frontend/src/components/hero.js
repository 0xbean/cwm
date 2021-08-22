import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

import TranslationSlider from './translation-slider';

const Hero = (props) => {
  const [ministries, ministriesOpen] = useState(false);
  const [resources, resourcesOpen] = useState(false);
  const wrapperRef = useRef(null);
  const { content, sansFont, serifFont } = props;

  useEffect(() => {
    if (!ministries && !resources) {
      return;
    }

    function handleOutsideClick(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        ministriesOpen(false);
        resourcesOpen(false);
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [ministries, resources]);

  const ministriesSelected = ministries ? 'bold' : 'normal';
  const resourcesSelected = resources ? 'bold' : 'normal';

  return (
    <>
      <img src="/bethel-cwm-logo.png" className="w-60" />

      <TranslationSlider />

      <div
        className="flex grid place-items-center m-4 grid-cols-3"
        ref={wrapperRef}
      >
        <Link href="/about">
          <a
            className={`font-${sansFont} font-normal text-lg cursor-pointer px-4 py-2 mt-2`}
          >
            {content.nav.about.name}
          </a>
        </Link>

        <div
          className="dropdown-menu flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 relative cursor-pointer select-none"
          onClick={() => {
            ministriesOpen((state) => !state);
            if (resources) {
              resourcesOpen((state) => !state);
            }
          }}
        >
          <span
            className={`font-${sansFont} font-${ministriesSelected} text-lg cursor-pointer`}
          >
            {content.nav.ministries.name}
          </span>

          {ministries ? (
            <div className="left-5/8 w-full mt-2 origin-top-right rounded-md md:w-48 z-10 bg-white fixed">
              <Link href="/ministries/supp-mission">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.ministries.childMenus.suppMission}
                </a>
              </Link>
              <Link href="/ministries/supp-org">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.ministries.childMenus.suppOrg}
                </a>
              </Link>
              <Link href="/ministries/short-term">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.ministries.childMenus.shortTermMission}
                </a>
              </Link>
              <Link href="/ministries/care-net">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.ministries.childMenus.careNet}
                </a>
              </Link>
            </div>
          ) : null}
        </div>
        <div
          className="dropdown-menu flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 relative cursor-pointer select-none"
          onClick={() => {
            resourcesOpen((state) => !state);
            if (ministries) {
              ministriesOpen((state) => !state);
            }
          }}
        >
          <span
            className={`font-${sansFont} font-normal text-lg cursor-pointer`}
          >
            {content.nav.resources.name}
          </span>
          {resources ? (
            <div className="right-5/8 w-full mt-2 origin-top-right rounded-md md:w-48 z-10 bg-white fixed">
              <Link href="/resources/seminars">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.resources.childMenus.seminars}
                </a>
              </Link>
              <Link href="/resources/perspectives">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.resources.childMenus.perspectives}
                </a>
              </Link>
              <Link href="/resources/short-term">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.resources.childMenus.shortTermMission}
                </a>
              </Link>
              <Link href="/resources/senior-missions">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer select-none">
                  {content.nav.resources.childMenus.seniorMissions}
                </a>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Hero;
