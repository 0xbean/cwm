import { Marker } from 'react-simple-maps';

const MapMarker = (props) => {
  const { coordSplit, idx } = props;
  return (
    <g
      key={idx}
      onClick={(e) => handleClick(e)}
      id={`${idx}_map-chart__marker`}
      className="map-chart__marker"
    >
      <Marker coordinates={[coordSplit[1], coordSplit[0]]}>
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
  );
};

export default MapMarker;
