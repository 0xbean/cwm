import React, { memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

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
            <Marker
              coordinates={[missionary.geocode.lng, missionary.geocode.lat]}
              key={idx}
            >
              <circle
                r={3}
                fill="#282828"
                style={{
                  pressed: {
                    fill: '#2f426a',
                    outline: 'none',
                  },
                }}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
