const Continent = (props) => {
  const { continent, entities, setActive, active, setActiveSub, activeSub } =
    props;

  const continentValue = continent[1];

  const mainActive =
    continentValue === active.activeContinent ? active.className : '';
  const filteredEntities = entities.filter(
    (entity) => entity.continent === continentValue
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
        ? filteredEntities.map((mappedEntity, idx) => {
            let className = '';

            if (activeSub.entity) {
              if (mappedEntity.id === activeSub.entity.id) {
                className = activeSub.className;
              }
            }
            return (
              <p
                className={`continent__entities ${className}`}
                onClick={() =>
                  setActiveSub({
                    entity: mappedEntity,
                    className: 'continent__active-sub',
                  })
                }
                key={idx}
              >
                {mappedEntity.name}
              </p>
            );
          })
        : null}
    </div>
  );
};

export default Continent;
