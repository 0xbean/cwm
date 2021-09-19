export default function CareNetPage(props) {
  const { translation } = props;
  return (
    <>
      <div className="care-net">
        <h1 className="care-net__header">{translation.careNet.header}</h1>
        <p className="care-net__text">{translation.careNet.body}</p>
        <div className="care-net__connect">
          <p className="care-net__connect-text">
            {translation.careNet.connectText}
          </p>
          <div className="btn">{translation.careNet.connectButton}</div>
        </div>
      </div>
    </>
  );
}

// export default function GetServerSideProps({ ctx }) {

// }
