import React from 'react';
import Link from 'next/link';

const MapEntity = (props) => {
  const { entity } = props;
  let location = '';

  if (entity.city && entity.country) {
    location = `${entity.city}, ${entity.country}`;
  } else if (entity.country) {
    location = `${entity.country}`;
  }

  return (
    <>
      <div className="map-entity__card">
        <h1 className="map-entity__card-header">{entity.name}</h1>
        <p className="map-entity__card-location">{location}</p>
        <Link
          href={
            entity.button_text
              ? `/ministries/short-term/${entity.id}/#information`
              : `/ministries/supp-mission/${entity.id}/#information`
          }
          passHref
        >
          <a className="map-entity__card-link">Learn More</a>
        </Link>
      </div>
    </>
  );
};

export default MapEntity;
