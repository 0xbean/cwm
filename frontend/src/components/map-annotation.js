import { Annotation } from 'react-simple-maps';

import MapEntity from './map-entity';

const MapAnnotation = (props) => {
  const { entities, coordSplit, idx } = props;
  return (
    <Annotation
      subject={[coordSplit[1], coordSplit[0]]}
      dx={-20}
      dy={-10}
      connectorProps={{
        strokeWidth: 0,
      }}
      className="map-chart__annotation"
      id={`${idx}_map-chart__annotation`}
    >
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
        <foreignObject
          x="-120"
          y={entities.length > 3 ? -115 : entities.length * -57.5}
          width="125"
          height={entities.length > 3 ? 115 : entities.length * 57.5}
        >
          <div className="map-entity">
            {entities.map((entity, idx) => (
              <MapEntity entity={entity} key={idx} />
            ))}
          </div>
        </foreignObject>
      </g>
    </Annotation>
  );
};

export default MapAnnotation;
