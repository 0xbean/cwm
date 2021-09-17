import MapChart from '../components/map-chart';
import { getRequest } from '../../tools/api';
import { useState } from 'react';
import fs from 'fs';

export default function IndexPage(props) {
  const { content, map, sansFont, serifFont } = props;
  return (
    <>
      <div className="flex h-2/3 w-full place-items-center flex-col">
        <MapChart content={content} map={map} />
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
