import React from 'react';
import fs from 'fs';

import MapChart from '../components/map-chart';
import NeedsContent from '../components/needs-content';
import { getRequest } from '../../util/api';

import { Carousel } from 'react-responsive-carousel';

export default function IndexPage(props) {
  const { mapContent, orgContent, cmsURL, map, translation } = props;

  return (
    <>
      <div className="index">
        <MapChart mapContent={mapContent} map={map} />
        <p className="index__disclaimer">{translation.index.disclaimer}</p>
        <div className="index__welcome col-md-12 col-sm-12 col-12">
          <div className="index__welcome-text col-md-6 col-sm-6 col-6">
            <h1>{translation.index.welcomeHeader}</h1>
            <p>{translation.index.welcomeText}</p>
          </div>
          <div className="index__welcome-imgs col-md-6 col-sm-6 col-6">
            <img src="/images/index-image-1.jpg" />
            <img src="/images/index-image-2.jpg" />
            <img />
          </div>
        </div>

        <div className="index__orgs">
          <h1 className="index__orgs-header">
            {translation.index.supportedOrgsHeader}
          </h1>
          {orgContent && orgContent.length && orgContent !== undefined ? (
            <Carousel
              plugins={['arrows']}
              className="index__orgs-carousel"
              dynamicHeight={true}
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              {orgContent.map((org, idx) => (
                <div className="index__orgs-carousel--card" key={idx * 12}>
                  <img
                    className="index__orgs-carousel--card---img"
                    src={`${cmsURL}${org.img.url}`}
                  />
                  <p>{org.name}</p>
                </div>
              ))}
            </Carousel>
          ) : (
            <NeedsContent />
          )}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let url = `${process.env.API_URL}/missionaries`;
  if (ctx) {
    if (ctx.locale) {
      url += `?_locale=${ctx.locale}`;
    }
  } else {
    url += `?_locale=en`;
  }

  const mapContent = await getRequest(url);

  url = `${process.env.API_URL}/organizations`;
  if (ctx) {
    if (ctx.locale) {
      url += `?_locale=${ctx.locale}`;
    }
  } else {
    url += `?_locale=en`;
  }

  const orgContent = await getRequest(url);
  const cmsURL = process.env.CMS_URL;
  const file = fs.readFileSync('./public/miscellaneous/world-110m.json');
  const map = JSON.parse(file);

  return {
    props: {
      mapContent,
      orgContent,
      cmsURL,
      map,
    },
  };
}
