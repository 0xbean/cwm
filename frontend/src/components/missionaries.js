import Continent from './continent';

const Missionaries = (props) => {
  const { missionaries, translation } = props;

  return (
    <div className="supp-mission__missionaries">
      <div className="supp-mission__missionaries-continent">
        <p>{translation.suppMission.searchByContinent}</p>
        {Object.entries(translation.suppMission.continents).map((continent) => (
          <Continent continent={continent} missionaries={missionaries} />
        ))}
      </div>
      <div className="supp-mission__missionaries-info"></div>
    </div>
  );
};

export default Missionaries;
