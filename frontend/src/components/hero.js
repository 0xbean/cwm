import Link from 'next/link';
import { useState } from 'react';

const Hero = () => {
  const [ministries, ministriesOpen] = useState(false);
  const [resources, resourcesOpen] = useState(false);

  return (
    <>
      <div className="flex grid place-items-center w-3/4 h-1/4 grid-cols-3">
        <a>
          <Link href="/about">About</Link>
        </a>
        <div
          className="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          onClick={() => {
            ministriesOpen(!ministries);
          }}
        >
          Ministries
          {ministries ? (
            <div class="relative">
              <div className="absolute right-1/2 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                  <Link href="/ministries/supp-mission">
                    Supported Missionaries
                  </Link>
                </a>
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                  <Link href="/ministries/supp-org">
                    Supported Organizations
                  </Link>
                </a>
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                  <Link href="/ministries/short-term">Short Term Missions</Link>
                </a>
                <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                  <Link href="/ministries/care-net">CareNet</Link>
                </a>
              </div>
            </div>
          ) : null}
        </div>
        <div
          className=""
          onClick={() => {
            resourcesOpen(!resources);
          }}
        >
          Resources
          {resources ? (
            <>
              <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                <Link href="/resources/supp-mission">
                  Supported Missionaries
                </Link>
              </a>
              <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                <Link href="/resources/supp-org">Supported Organizations</Link>
              </a>
              <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                <Link href="/resources/short-term">Short Term Missions</Link>
              </a>
              <a className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                <Link href="/resources/care-net">CareNet</Link>
              </a>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Hero;
