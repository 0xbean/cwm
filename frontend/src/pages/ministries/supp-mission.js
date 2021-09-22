import fs from 'fs';

import MapChart from '../../components/map-chart';
import { getRequest } from '../../../util/api';

export default function SuppMissionaryPage(props) {
  const { mapContent, map, translation } = props;

  return (
    <>
      <div className="supp-mission">
        <div className="supp-mission__definitions">
          <div className="supp-mission__definitions-block">
            <h1>{translation.suppMission.sentMissionHeader}</h1>
            <p>{translation.suppMission.sentMissionText}</p>
          </div>
          <div className="supp-mission__definitions-block">
            <h1>{translation.suppMission.seniorMissionHeader}</h1>
            <p>{translation.suppMission.seniorMissionText}</p>
          </div>
          <div className="supp-mission__definitions-block">
            <h1>{translation.suppMission.associateMissionHeader}</h1>
            <p>{translation.suppMission.associateMissionText}</p>
          </div>
        </div>
        <div className="btn">{translation.suppMission.applyButtonText}</div>
        <MapChart mapContent={mapContent} map={map} />
        <div className="supp-mission__missionaries">
          <div className="supp-mission__missionaries-continent"></div>
          <div className="supp-mission__missionaries-info" id="information">
            test
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let url = `${process.env.CMS_URL}/missionaries`;
  if (ctx) {
    if (ctx.locale) {
      url += `?_locale=${ctx.locale}`;
    }
  } else {
    url += `?_locale=en`;
  }

  const mapContent = await getRequest(url);

  const file = fs.readFileSync('./public/miscellaneous/world-110m.json');
  const map = JSON.parse(file);
  return {
    props: {
      mapContent,
      map,
    },
  };
}
