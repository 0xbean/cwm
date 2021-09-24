const Footer = (props) => {
  const { translation } = props;

  return (
    <div className="footer col-md-12 col-sm-12 col-lg-12 col-12">
      <div className="footer__img-container">
        <img src="/images/bethel-cwm-logo-small.png" className="footer__img" />
      </div>

      <div className="footer__contact col-md-12 col-sm-12 col-lg-12 col-12">
        <p className="footer__contact-text">{translation.footer.title}</p>
        <p className="footer__contact-text">EMAIL | PHONE | ADDRESS</p>
      </div>
    </div>
  );
};

export default Footer;
