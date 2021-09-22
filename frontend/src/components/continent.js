const Continent = (props) => {
  const { continent, missionaries } = props;

  let mappedMissionaries = [];

  missionaries.map((missionary) =>
    missionary.continent === continent[1]
      ? mappedMissionaries.push(missionary)
      : null
  );

  return (
    <div className="continent">
      <div>
        <p>{continent[1]}</p>
        {mappedMissionaries.map((mappedMissionary) => (
          <p>{mappedMissionary.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Continent;
