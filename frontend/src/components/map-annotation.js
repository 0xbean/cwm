import { Annotation } from 'react-simple-maps';
import { useRef, useEffect } from 'react';
import MapEntity from './map-entity';

function useOutsideClick(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      const id = ref.current.parentNode.id.charAt(0);
      const paired_marker = document.getElementById(`${id}_map-chart__marker`);

      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !paired_marker.contains(event.target)
      ) {
        ref.current.parentNode.style.opacity = '0%';
        ref.current.parentNode.style.display = 'none';
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const MapAnnotation = (props) => {
  const { entities, coordSplit, idx } = props;
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef);
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
      <g ref={wrapperRef}>
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
