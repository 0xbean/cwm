import React from 'react';
import fs from 'fs';

import MapChart from '../components/map-chart';
import { getRequest } from '../../util/api';

import { Carousel } from 'react-responsive-carousel';

export default function IndexPage(props) {
  const { content, map, translation } = props;
  return (
    <>
      <div className="index">
        <MapChart content={content} map={map} />
        <p className="index__disclaimer">{translation.index.disclaimer}</p>
        <div className="index__welcome col-md-12 col-sm-12 col-12">
          <div className="index__welcome-text">
            <h1>{translation.index.welcomeHeader}</h1>
            <p>{translation.index.welcomeText}</p>
          </div>
          <div className="index__welcome-imgs">Other Side</div>
        </div>

        <div className="index__orgs">
          <h1 className="index__orgs-header">
            {translation.index.supportedOrgsHeader}
          </h1>
          <Carousel plugins={['arrows']} className="index__orgs-carousel">
            <img src={'/images/seminars.png'} />
            <img src={'/images/seminars.png'} />
            <img src={'/images/seminars.png'} />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let url = `http://localhost:1337/missionaries`;
  if (ctx) {
    if (ctx.locale) {
      url += `?_locale=${ctx.locale}`;
    }
  } else {
    url += `?_locale=en`;
  }

  const content = await getRequest(url);
  const file = fs.readFileSync('./public/miscellaneous/world-110m.json');
  const map = JSON.parse(file);
  return {
    props: {
      content,
      map,
    },
  };
}
