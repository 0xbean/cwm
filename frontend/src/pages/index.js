import MapChart from '../components/map-chart';
import { getRequest } from '../../tools/api';
import { useState } from 'react';
import fs from 'fs';

export default function IndexPage({ content, map }) {
  const [tooltipContent, setToolTipContent] = useState('');
  const pageContent = content[0];
  return (
    <>
      <div className="flex h-3/4 w-full place-items-center flex-col">
        <MapChart setTooltipContent={setToolTipContent} map={map} />
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let url = `http://localhost:1337/indices/`;
  if (ctx) {
    const { locale } = ctx;
    if (locale) {
      url += `?_locale=${locale}`;
    }
  }

  const content = await getRequest(url);
  const file = fs.readFileSync('./public/world-110m.json');
  const map = JSON.parse(file);
  return {
    props: {
      content,
      map,
    },
  };
}
