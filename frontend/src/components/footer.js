const Footer = (props) => {
  const { content } = props;

  return (
    <div className="footer col-md-12 col-sm-12 col-lg-12 row">
      <img src="/images/bethel-cwm-logo-small.png" className="footer__img" />
      <div className="footer__contact">
        <p className="footer__contact-text">{content.title}</p>
        <p className="footer__contact-text">EMAIL | PHONE | ADDRESS</p>
      </div>
    </div>
  );
};

export default Footer;
