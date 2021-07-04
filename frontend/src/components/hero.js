import Link from 'next/link';
import { useState } from 'react';

const Hero = (props) => {
  const [ministries, ministriesOpen] = useState(false);
  const [resources, resourcesOpen] = useState(false);
  const { router, content } = props;
  return (
    <>
      <h1 className="flex grid place-items-center w-screen m-4">
        {content.title}
      </h1>
      <div className="flex grid place-items-center m-4 grid-cols-4">
        <Link href="/about">
          <a className="text-sm font-semibold cursor-pointer">
            {content.nav.about.name}
          </a>
        </Link>

        <div
          className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 relative cursor-pointer "
          onClick={() => {
            ministriesOpen(!ministries);
            if (resources) {
              resourcesOpen(!resources);
            }
          }}
        >
          {content.nav.ministries.name}
          {ministries ? (
            <div className="left-5/8 w-full mt-2 origin-top-right rounded-md md:w-48 z-10 bg-white fixed">
              <Link href="/ministries/supp-mission">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.ministries.childMenus.suppMission}
                </a>
              </Link>
              <Link href="/ministries/supp-org">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.ministries.childMenus.suppOrg}
                </a>
              </Link>
              <Link href="/ministries/short-term">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.ministries.childMenus.shortTermMission}
                </a>
              </Link>
              <Link href="/ministries/care-net">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.ministries.childMenus.careNet}
                </a>
              </Link>
            </div>
          ) : null}
        </div>
        <div
          className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 relative cursor-pointer"
          onClick={() => {
            resourcesOpen(!resources);
            if (ministries) {
              ministriesOpen(!ministries);
            }
          }}
        >
          {content.nav.resources.name}
          {resources ? (
            <div className="right-5/8 w-full mt-2 origin-top-right rounded-md md:w-48 z-10 bg-white fixed">
              <Link href="/resources/seminars">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.resources.childMenus.seminars}
                </a>
              </Link>
              <Link href="/resources/perspectives">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.resources.childMenus.perspectives}
                </a>
              </Link>
              <Link href="/resources/short-term">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.resources.childMenus.shortTermMission}
                </a>
              </Link>
              <Link href="/resources/senior-missions">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white cursor-pointer">
                  {content.nav.resources.childMenus.seniorMissions}
                </a>
              </Link>
            </div>
          ) : null}
        </div>

        <Link
          href={router.asPath}
          locale={router.locale === 'en' ? 'ko-KR' : 'en'}
        >
          <a className="text-sm font-semibold">
            {router.locale === 'en' ? '한국어' : 'English'}
          </a>
        </Link>
      </div>
    </>
  );
};

export default Hero;
