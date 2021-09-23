const Continent = (props) => {
  const { continent, missionaries, active } = props;

  // if not sent down through the props, then set active through setState
  if (active) {
  }

  const continentValue = continent[1];

  return (
    <div className={`continent `}>
      <p className="continent__name">{continentValue}</p>
      {missionaries
        .filter((missionary) => missionary.continent === continentValue)
        .map((mappedMissionary, idx) => (
          <p className="continent__missionaries" key={idx}>
            {mappedMissionary.name}
          </p>
        ))}
    </div>
  );
};

export default Continent;
