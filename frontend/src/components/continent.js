const Continent = (props) => {
  const {
    continent,
    missionaries,
    setActive,
    active,
    setActiveSub,
    activeSub,
  } = props;

  const continentValue = continent[1];

  const mainActive =
    continentValue === active.activeContinent ? active.className : '';
  const filteredMissionaries = missionaries.filter(
    (missionary) => missionary.continent === continentValue
  );

  return (
    <div className="continent">
      <p
        className={`continent__name ${mainActive}`}
        onClick={() => {
          setActive({
            activeContinent: continentValue,
            className: 'continent__active',
          });
          setActiveSub(0);
        }}
      >
        {`${mainActive ? ' - ' : ''}${continentValue}`}
      </p>
      {mainActive
        ? filteredMissionaries.map((mappedMissionary, idx) => {
            let className = '';

            if (activeSub.activeMissionary) {
              if (mappedMissionary.id === activeSub.activeMissionary.id) {
                className = activeSub.className;
              }
            }
            return (
              <p
                className={`continent__missionaries ${className}`}
                onClick={() =>
                  setActiveSub({
                    activeMissionary: mappedMissionary,
                    className: 'continent__active-sub',
                  })
                }
                key={idx}
              >
                {mappedMissionary.name}
              </p>
            );
          })
        : null}
    </div>
  );
};

export default Continent;
