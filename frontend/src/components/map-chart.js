import React, { memo, useEffect, useRef, useState } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from 'react-simple-maps';

import MapEntity from './map-entity';

const handleClick = (e) => {
  const idSplit = e.currentTarget.id.split('_');
  const id = idSplit[0];
  const annotations = document.querySelectorAll(
    "[id*='_map-chart__annotation']"
  );
  annotations.forEach((annotation) => (annotation.style.opacity = '0%'));
  document.getElementById(`${id}_map-chart__annotation`).style.opacity = '100%';
};

const MapChart = (props) => {
  const { content, map } = props;
  const mapWidth = 800;
  const mapHeight = 600;

  const handleFilter = ({ constructor: { name } }) => {
    return name !== 'WheelEvent' && name != 'MouseEvent';
  };

  return (
    <>
      <ComposableMap
        data-tip=""
        width={mapWidth}
        height={mapHeight}
        projectionConfig={{ scale: 160 }}
      >
        <ZoomableGroup filterZoomEvent={handleFilter}>
          <Geographies geography={map}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#3B5284',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#7686a9',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#2f426a',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {content.map((missionary, idx) => (
            <g
              key={idx}
              onClick={(e) => handleClick(e)}
              id={`${idx}_map-chart__marker`}
              className="map-chart__marker"
            >
              <Marker
                coordinates={[missionary.geocode.lng, missionary.geocode.lat]}
              >
                <g
                  fill="#5BA8A0"
                  stroke="#5BA8A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(-12, -24)"
                >
                  <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                </g>
              </Marker>
            </g>
          ))}

          {content.map((missionary, idx) => {
            return (
              <Annotation
                subject={[missionary.geocode.lng, missionary.geocode.lat]}
                dx={-20}
                dy={-10}
                curve={-1.75}
                connectorProps={{
                  stroke: '#5BA8A0',
                  strokeWidth: 1,
                  strokeLinecap: 'round',
                }}
                className="map-chart__annotation"
                id={`${idx}_map-chart__annotation`}
                key={10 * idx}
              >
                <MapEntity missionary={missionary} />
              </Annotation>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
