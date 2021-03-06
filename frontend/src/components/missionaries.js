import { useState } from 'react';

import Continent from './continent';
import MissionaryInfo from './missionary-info';

const Missionaries = (props) => {
  const { selectedMissionary, missionaries, translation, cmsUrl } = props;

  const [active, setActive] = useState({
    activeContinent: selectedMissionary ? selectedMissionary.continent : '',
    className: selectedMissionary ? 'continent__active' : '',
  });
  const [activeSub, setActiveSub] = useState({
    entity: selectedMissionary ? selectedMissionary : null,
    className: selectedMissionary ? 'continent__active-sub' : '',
  });

  return (
    <div className="supp-mission__missionaries col-md-12" id="information">
      <div className="supp-mission__missionaries-continent col-md-3">
        <p className="supp-mission__missionaries-continent--header">
          {translation.suppMission.searchByContinent}
        </p>
        {Object.entries(translation.suppMission.continents).map(
          (continent, idx) => (
            <Continent
              continent={continent}
              entities={missionaries}
              active={active}
              setActive={setActive}
              activeSub={activeSub}
              setActiveSub={setActiveSub}
              key={idx}
            />
          )
        )}
      </div>
      <div className="supp-mission__missionaries-info col-md-9">
        {activeSub.entity ? (
          <MissionaryInfo
            activeSub={activeSub}
            cmsUrl={cmsUrl}
            translation={translation}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Missionaries;
