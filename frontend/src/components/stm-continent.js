const STMContinent = (props) => {
  const { continent, stms, setActive, active, setActiveSub, activeSub } = props;

  const continentValue = continent[1];

  const mainActive =
    continentValue === active.activeContinent ? active.className : '';
  const filteredStms = stms.filter(
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
        ? filteredStms.map((mappedStms, idx) => {
            let className = '';

            if (activeSub.activeMissionary) {
              if (mappedStms.id === activeSub.activeMissionary.id) {
                className = activeSub.className;
              }
            }
            return (
              <p
                className={`continent__missionaries ${className}`}
                onClick={() =>
                  setActiveSub({
                    activeMissionary: mappedStms,
                    className: 'continent__active-sub',
                  })
                }
                key={idx}
              >
                {mappedStms.name}
              </p>
            );
          })
        : null}
    </div>
  );
};

export default STMContinent;
