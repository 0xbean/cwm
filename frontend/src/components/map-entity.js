import React from 'react';

const MapEntity = (props) => {
  const { missionary } = props;
  let location = '';

  if (missionary.city && missionary.country) {
    location = `${missionary.city}, ${missionary.country}`;
  } else if (missionary.country) {
    location = `${missionary.country}`;
  }
  return (
    <>
      <div className="map-entity__card">
        <h1 className="map-entity__card-header">{missionary.name}</h1>
        <p className="map-entity__card-location">{location}</p>
        <a
          className="map-entity__card-link"
          href={`/ministries/supp-mission/${missionary.id}/#information`}
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default MapEntity;
