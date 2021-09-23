import Continent from './continent';

const Missionaries = (props) => {
  const { missionaries, translation } = props;

  return (
    <div className="supp-mission__missionaries">
      <div className="supp-mission__missionaries-continent">
        <p>{translation.suppMission.searchByContinent}</p>
        {Object.entries(translation.suppMission.continents).map(
          (continent, idx) => (
            <Continent
              continent={continent}
              missionaries={missionaries}
              key={idx}
            />
          )
        )}
      </div>
      <div className="supp-mission__missionaries-info"></div>
    </div>
  );
};

export default Missionaries;
