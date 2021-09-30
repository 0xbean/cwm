import { Carousel } from 'react-responsive-carousel';

import NeedsContent from './needs-content';

const STMInfo = (props) => {
  const { activeSub, cmsUrl, translation } = props;

  const stm = activeSub.entity;

  console.log(stm);
  let area = '';

  if (stm.city) {
    area += `${stm.city}, `;
  }

  if (stm.state) {
    area += `${stm.state}`;
  }

  if (stm.country && !stm.city && !stm.state) {
    area = stm.country;
  }

  return (
    <div className="stm-info">
      <div className="stm-info__bio">
        <div className="stm-info__bio-profile">
          {stm.img ? (
            <img
              className="stm-info__bio-profile--img"
              src={`${cmsUrl}${stm.img.formats.small.url}`}
            />
          ) : null}
          <div className="stm-info__bio-profile--text">
            <h2>{area}</h2>
            <h3>{stm.missionary_names}</h3>
            <p>{stm.description}</p>
          </div>
        </div>
        <h3>{translation.stm.photos}</h3>
        {stm.imgs.length ? (
          <Carousel
            plugins={['arrows']}
            className="stm-info__bio-carousel"
            dynamicHeight={true}
            infiniteLoop
            useKeyboardArrows
            autoPlay
          >
            {stm.imgs.map((img, idx) => (
              <img
                className="stm-info__bio-carousel--img"
                src={`${cmsUrl}${img.url}`}
                key={idx}
              />
            ))}
          </Carousel>
        ) : (
          <NeedsContent />
        )}

        <div className="btn">{stm.button_text}</div>
      </div>
    </div>
  );
};

export default STMInfo;
