import fs from 'fs';
import { useRouter } from 'next/router';

import Missionaries from '../../../components/missionaries';
import MapChart from '../../../components/map-chart';
import { getRequest } from '../../../../util/api';

export default function SuppMissionaryPage(props) {
  const { mapContent, map, translation, cmsUrl } = props;
  const router = useRouter();
  const { missionaryId } = router.query;

  let selectedMissionary = null;

  if (missionaryId) {
    selectedMissionary = mapContent.find(
      (missionary) => missionary.id == missionaryId
    );
  }

  return (
    <>
      <div className="supp-mission">
        <div className="supp-mission__definitions">
          <div className="supp-mission__definitions-block col-md-12 col-sm-12 col-12">
            <h1 className="col-md-4 col-sm-6 col-6">
              {translation.suppMission.sentMissionHeader}
            </h1>
            <p className="col-md-8 col-sm-6 col-6">
              {translation.suppMission.sentMissionText}
            </p>
          </div>
          <div className="supp-mission__definitions-block col-md-12 col-sm-12 col-12">
            <h1 className="col-md-4 col-sm-6 col-6">
              {translation.suppMission.seniorMissionHeader}
            </h1>
            <p className="col-md-8 col-sm-6 col-6">
              {translation.suppMission.seniorMissionText}
            </p>
          </div>
          <div className="supp-mission__definitions-block col-md-12 col-sm-12 col-12">
            <h1 className="col-md-4 col-sm-6 col-6">
              {translation.suppMission.associateMissionHeader}
            </h1>
            <p className="col-md-8 col-sm-6 col-6">
              {translation.suppMission.associateMissionText}
            </p>
          </div>
        </div>
        <div className="btn">{translation.suppMission.applyButtonText}</div>
        <MapChart mapContent={mapContent} map={map} translation={translation} />
        <Missionaries
          selectedMissionary={selectedMissionary}
          missionaries={mapContent}
          translation={translation}
          cmsUrl={cmsUrl}
        />
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
