import Carousel from 'react-responsive-carousel';

import NeedsContent from './needs-content';

const MissionaryInfo = (props) => {
  const { activeSub, cmsUrl, translation } = props;

  const missionary = activeSub.entity;

  let area = '';

  if (missionary.city) {
    area += `${missionary.city}, `;
  }

  if (missionary.state) {
    area += `${missionary.state}`;
  }

  if (missionary.country && !missionary.city && !missionary.state) {
    area = missionary.country;
  }

  return (
    <div className="missionary-info">
      <div className="missionary-info__bio">
        <div className="missionary-info__bio-profile">
          {missionary.img ? (
            <img
              className="missionary-info__bio-profile--img"
              src={`${cmsUrl}${missionary.img.formats.small.url}`}
            />
          ) : null}
          <div className="missionary-info__bio-profile--text">
            <h2>
              {missionary.name}
              <span>{missionary.title}</span>
            </h2>
            <h3>{area}</h3>
            <h4>Ministry: {missionary.ministry}</h4>
            <h4>CareNet: {missionary.carenet}</h4>
          </div>
        </div>
        <h3>{translation.suppMission.prayerRequests}</h3>
        <p className="missionary-info__bio-prayer-requests">
          {missionary.prayer_requests}
        </p>
        <h3>{translation.suppMission.photos}</h3>
        {missionary.imgs.length ? (
          <Carousel
            plugins={['arrows']}
            className="missionary-info__bio-carousel"
            dynamicHeight={true}
            infiniteLoop
            useKeyboardArrows
            autoPlay
          >
            {missionary.imgs.map((img, idx) => (
              <img
                className="missionary-info__bio-carousel--img"
                src={`${cmsUrl}${img.url}`}
                key={idx}
              />
            ))}
          </Carousel>
        ) : (
          <NeedsContent />
        )}
        <h3>{translation.suppMission.letters}</h3>
        {missionary.letters.length ? (
          missionary.letters.map((letter, idx) => (
            <a
              className="missionary-info__bio-document"
              href={`${cmsUrl}${letter.url}`}
              target="_blank"
              key={idx * 10}
            >
              {letter.name}
            </a>
          ))
        ) : (
          <NeedsContent />
        )}
      </div>
    </div>
  );
};

export default MissionaryInfo;
