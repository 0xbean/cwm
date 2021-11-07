import React from 'react';
import Link from 'next/link';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

import TranslationSlider from './translation-slider';

const Hero = (props) => {
  const { router, image, translation } = props;

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="col-md-12 row">
        <Link href="/" locale={router.locale} passHref>
          <a>
            <img
              src="/images/bethel-cwm-logo.png"
              className="mx-auto d-block col-md-3 col-sm-3 col-3"
            />
          </a>
        </Link>
      </div>

      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav__main-links">
              <Link href="/about" locale={router.locale} passHref>
                <Nav.Link>{translation.header.nav.about.name}</Nav.Link>
              </Link>
              <NavDropdown
                title={translation.header.nav.ministries.name}
                id="collasible-nav-dropdown"
              >
                <Link
                  href="/ministries/supp-mission"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {translation.header.nav.ministries.childMenus.suppMission}
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/ministries/supp-org"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {translation.header.nav.ministries.childMenus.suppOrg}
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/ministries/short-term"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {
                      translation.header.nav.ministries.childMenus
                        .shortTermMission
                    }
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/ministries/care-net"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {translation.header.nav.ministries.childMenus.careNet}
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>

              <NavDropdown
                title={translation.header.nav.resources.name}
                id="collasible-nav-dropdown"
              >
                <Link
                  href="/resources/seminars"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {translation.header.nav.resources.childMenus.seminars}
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/resources/perspectives"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {translation.header.nav.resources.childMenus.perspectives}
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/resources/short-term-training"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {
                      translation.header.nav.resources.childMenus
                        .shortTermMission
                    }
                  </NavDropdown.Item>
                </Link>
                <Link
                  href="/resources/senior-missions"
                  locale={router.locale}
                  passHref
                >
                  <NavDropdown.Item>
                    {translation.header.nav.resources.childMenus.seniorMissions}
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            </Nav>
            <Nav className="nav__translation-link ms-auto">
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
