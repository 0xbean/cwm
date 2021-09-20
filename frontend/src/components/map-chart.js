import React, { memo } from 'react';
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import _ from 'lodash';

import MapAnnotation from './map-annotation';
import MapMarker from './map-marker';

import { groupBy } from '../../util/helper';

const MapChart = (props) => {
  const { content, map } = props;
  const mapWidth = 800;
  const mapHeight = 500;

  const groups = groupBy(content, 'geocode', ['lat', 'lng']);
  const iterable = Object.entries(groups);
  const markerIterable = _.cloneDeep(iterable);

  const handleFilter = ({ constructor: { name } }) => {
    return name !== 'WheelEvent' && name != 'MouseEvent';
  };

  return (
    <div className="map-chart">
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

          {markerIterable.map((missionaryGroup, idx) => {
            const coords = missionaryGroup.shift();
            const coordSplit = coords.split(':');
            return <MapMarker coordSplit={coordSplit} idx={idx} key={idx} />;
          })}

          {iterable.map((missionaryGroup, idx) => {
            const coords = missionaryGroup.shift();
            const coordSplit = coords.split(':');
            const missionaries = missionaryGroup[0];
            return (
              <MapAnnotation
                missionaries={missionaries}
                coordSplit={coordSplit}
                idx={idx}
                key={idx * 10}
              />
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
