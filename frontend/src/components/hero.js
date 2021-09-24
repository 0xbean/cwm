import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

import TranslationSlider from './translation-slider';

const Hero = (props) => {
  const { router, image, translation } = props;

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="col-md-12 row">
        <a href="/">
          <img
            src="/images/bethel-cwm-logo.png"
            className="mx-auto d-block col-md-3 col-sm-3 col-3"
          />
        </a>
      </div>

      <Navbar collapseOnSelect expand="lg" className="col-md-12">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/about">
                {translation.header.nav.about.name}
              </Nav.Link>
              <NavDropdown
                title={translation.header.nav.ministries.name}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/ministries/supp-mission">
                  {translation.header.nav.ministries.childMenus.suppMission}
                </NavDropdown.Item>
                <NavDropdown.Item href="/ministries/supp-org">
                  {translation.header.nav.ministries.childMenus.suppOrg}
                </NavDropdown.Item>
                <NavDropdown.Item href="/ministries/short-term">
                  {
                    translation.header.nav.ministries.childMenus
                      .shortTermMission
                  }
                </NavDropdown.Item>
                <NavDropdown.Item href="/ministries/care-net">
                  {translation.header.nav.ministries.childMenus.careNet}
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={translation.header.nav.resources.name}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="/resources/seminars">
                  {translation.header.nav.resources.childMenus.seminars}
                </NavDropdown.Item>
                <NavDropdown.Item href="/resources/perspectives">
                  {translation.header.nav.resources.childMenus.perspectives}
                </NavDropdown.Item>
                <NavDropdown.Item href="/resources/short-term">
                  {translation.header.nav.resources.childMenus.shortTermMission}
                </NavDropdown.Item>
                <NavDropdown.Item href="/resources/senior-missions">
                  {translation.header.nav.resources.childMenus.seniorMissions}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <TranslationSlider router={router} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="col-md-12">
        <img src={image} className="hero__image" />
      </div>
    </div>
  );
};

export default Hero;
