const Footer = () => {
  return (
    <>
      <img
        src="/images/bethel-cwm-logo-small.png"
        className="w-24 fixed bottom-3 left-3 z-10 select-none"
      />
      <div className="h-28 bg-theme-black-light w-screen flex items-center justify-center flex-col fixed bottom-0 left-0">
        <p className="text-theme-white">CONTACT US</p>
        <p className="text-theme-white">EMAIL | PHONE | ADDRESS</p>
      </div>
    </>
  );
};

export default Footer;
