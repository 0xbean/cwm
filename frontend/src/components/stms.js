import { useState } from 'react';

import STMContinent from './stm-continent';
import STMInfo from './stm-info';

const STMs = (props) => {
  const { selectedMissions, stms, translation, cmsUrl } = props;

  const [active, setActive] = useState({
    activeContinent: selectedMissions ? selectedMissions.continent : '',
    className: selectedMissions ? 'continent__active' : '',
  });
  const [activeSub, setActiveSub] = useState({
    entity: selectedMissions ? selectedMissions : null,
    className: selectedMissions ? 'continent__active-sub' : '',
  });

  return (
    <div className="stm__stms col-md-12" id="information">
      <div className="stm__stms-continent col-md-3">
        <p className="stm__stms-continent--header">
          {translation.suppMission.searchByContinent}
        </p>
        {Object.entries(translation.suppMission.continents).map(
          (continent, idx) => (
            <STMContinent
              continent={continent}
              stms={stms}
              active={active}
              setActive={setActive}
              activeSub={activeSub}
              setActiveSub={setActiveSub}
              key={idx}
            />
          )
        )}
      </div>
      <div className="stm__stms-info col-md-9">
        {activeSub.activeMissionary ? (
          <STMInfo
            activeSub={activeSub}
            cmsUrl={cmsUrl}
            translation={translation}
          />
        ) : null}
      </div>
    </div>
  );
};

export default STMs;
