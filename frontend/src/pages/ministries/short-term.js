import fs from 'fs';

import MapChart from '../../components/map-chart';

import { getRequest } from '../../../util/api';

export default function ShortTermPage(props) {
  const { translation, mapContent, map } = props;

  return (
    <>
      <div className="stm">
        <h1></h1>
        <p></p>
        <h1></h1>
        <MapChart mapContent={mapContent} map={map} translation={translation} />
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let url = `${process.env.CMS_URL}/short-term-missions`;
  if (ctx) {
    if (ctx.locale) {
      url += `?_locale=${ctx.locale}`;
    }
  } else {
    url += `?_locale=en`;
  }

  let mapContent = await getRequest(url);

  const file = fs.readFileSync('./public/miscellaneous/world-110m.json');
  const cmsUrl = process.env.CMS_URL;
  const map = JSON.parse(file);

  if (mapContent && mapContent !== undefined) {
    if (mapContent.statusCode !== 200) {
      mapContent = null;
    }
  }
  return {
    props: {
      mapContent,
      cmsUrl,
      map,
    },
  };
}
