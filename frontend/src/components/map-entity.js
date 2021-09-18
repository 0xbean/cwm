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
      <g>
        <rect
          width="200"
          height="100"
          fill="none"
          stroke="#5BA8A0"
          strokeWidth="0"
          x="-100"
          y="-50"
        />
        <foreignObject x="-90" y="-100" width="100" height="100">
          <div className="map-entity">
            <div className="map-entity__card">
              <h1 className="map-entity__card-header">{missionary.name}</h1>
              <p className="map-entity__card-location">{location}</p>
              <a
                className="map-entity__card-link"
                href={`/ministries/supp-mission/${missionary.id}`}
              >
                Learn More
              </a>
            </div>
          </div>
        </foreignObject>
      </g>
    </>
  );
};

export default MapEntity;
