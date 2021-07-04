import MapChart from '../components/map-chart';
import { getRequest } from '../../tools/api';
import { useState } from 'react';

export default function IndexPage({ content }) {
  const [tooltipContent, setToolTipContent] = useState('');
  const pageContent = content[0];
  return (
    <>
      <div className="flex h-3/4 w-full place-items-center flex-col">
        {pageContent.title}
        <MapChart setTooltipContent={setToolTipContent} />
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
  return {
    props: {
      content,
    },
  };
}
