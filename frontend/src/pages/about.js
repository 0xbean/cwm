export default function AboutPage(props) {
  const { translation } = props;
  return (
    <>
      <div className="about u-margin-top-huge">
        <h1 className="about__header">{translation.about.header}</h1>
        <p className="about__text">{translation.about.visionText}</p>
        <h1 className="about__team-header">{translation.about.teamHeader}</h1>
        <div className="about__team">
          <div className="about__team-card">
            <img src="/images/director.svg" />
            <h2 className="about__team-header">{translation.about.director}</h2>
          </div>
          <div className="about__team-card">
            <img src="/images/board-of-trustees.svg" />
            <h2 className="about__team-header">{translation.about.trustees}</h2>
          </div>
          <div className="about__team-card">
            <img src="/images/executive-committee.svg" />
            <div>
              <h2 className="about__team-header">
                {translation.about.committee}
              </h2>
              <p className="about__team-extra">
                {translation.about.committeeRoles}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function GetServerSideProps({ ctx }) {

// }
