import fs from 'fs';
import { useRouter } from 'next/router';

import MapChart from '../../../components/map-chart';
import NeedsContent from '../../../components/needs-content';
import STMs from '../../../components/stms';

import { getRequest } from '../../../../util/api';
import { locationBuilder } from '../../../../util/helper';

export default function ShortTermPage(props) {
  const { mapContent, map, translation, cmsUrl } = props;
  const router = useRouter();
  const { shortTermId } = router.query;

  let selectedMissions = null;

  if (shortTermId) {
    selectedMissions = mapContent.find((stm) => stm.id == shortTermId);
  }

  const upcomingTrips = mapContent.map((stm) => {
    if (
      (stm.city && stm.country) ||
      stm.country ||
      (stm.city && stm.state && stm.start_date && stm.end_date)
    ) {
      return stm;
    } else {
      return;
    }
  });

  return (
    <>
      <div className="stm">
        <div className="stm__main">
          <h1>{translation.stm.mainHeader}</h1>
          <p>{translation.stm.mainBody}</p>
        </div>
        <div className="stm__trips">
          <h1>{translation.stm.upcomingTrips}</h1>
          {upcomingTrips ? (
            upcomingTrips.map((stm, idx) => (
              <div className="stm__trips-entity" key={idx}>
                <p>{locationBuilder(stm.city, stm.state, stm.country)}</p>
                <p>{`${new Date(
                  stm.start_date
                ).toLocaleDateString()} - ${new Date(
                  stm.end_date
                ).toLocaleDateString()}`}</p>
              </div>
            ))
          ) : (
            <NeedsContent />
          )}
        </div>
        <div className="btn">{translation.stm.downloadAppButton}</div>
        <h1 className="stm__header">{translation.stm.previousTrips}</h1>
        <MapChart mapContent={mapContent} map={map} translation={translation} />
        <STMs
          selectedMissions={selectedMissions}
          stms={mapContent}
          translation={translation}
          cmsUrl={cmsUrl}
        />
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

  const mapContent = await getRequest(url);

  const file = fs.readFileSync('./public/miscellaneous/world-110m.json');
  const cmsUrl = process.env.CMS_URL;
  const map = JSON.parse(file);
  return {
    props: {
      mapContent,
      cmsUrl,
      map,
    },
  };
}
