import React, { memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn';
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M';
  } else {
    return Math.round(num / 100) / 10 + 'K';
  }
};

const MapChart = ({ setTooltipContent, map }) => {
  const mapWidth = 800;
  const mapHeight = 420;

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
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent('');
                  }}
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
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
