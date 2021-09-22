import React from 'react';

import { getRequest } from '../../../util/api';
import { chunk } from '../../../util/helper';

export default function SuppOrgPage(props) {
  const { translation, orgContent, cmsURL } = props;

  const groups = chunk(orgContent, 3);

  return (
    <>
      <div className="supp-org">
        <div className="btn">{translation.suppOrg.mainButton}</div>
        <div className="supp-org__orgs">
          {groups.map((div, idx) => (
            <div className="supp-org__orgs-row col-md-12" key={idx}>
              {div.map((org) => (
                <div
                  className="supp-org__orgs-row--card col-md-4"
                  key={org.name}
                >
                  <img
                    className="supp-org__orgs-row--card---img"
                    src={`${cmsURL}${org.img.url}`}
                  />

                  <p>{org.name}</p>
                  <a href={org.link} target="_blank">
                    <div className="btn supp-org__orgs-row--card---btn">
                      {translation.suppOrg.visitWebsite}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let url = `${process.env.CMS_URL}/organizations`;

  if (ctx) {
    if (ctx.locale) {
      url += `?_locale=${ctx.locale}`;
    }
  } else {
    url += `?_locale=en`;
  }

  const orgContent = await getRequest(url);
  const cmsURL = process.env.CMS_URL;

  return {
    props: {
      orgContent,
      cmsURL,
    },
  };
}
