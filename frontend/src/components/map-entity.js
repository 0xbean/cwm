import React from 'react';

const MapEntity = (props) => {
  const { entity } = props;
  let location = '';

  if (entity.city && entity.country) {
    location = `${entity.city}, ${entity.country}`;
  } else if (entity.country) {
    location = `${entity.country}`;
  }

  console.log(entity);
  return (
    <>
      <div className="map-entity__card">
        <h1 className="map-entity__card-header">{entity.name}</h1>
        <p className="map-entity__card-location">{location}</p>
        <a
          className="map-entity__card-link"
          href={
            entity.button_text
              ? `/ministries/short-term/${entity.id}/#information`
              : `/ministries/supp-mission/${entity.id}/#information`
          }
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default MapEntity;
