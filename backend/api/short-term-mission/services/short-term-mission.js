"use strict";

const opencage = require("opencage-api-client");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
  mapGeocoder: async (country, state, city) => {
    let q = "";
    if (state && city) {
      q += `${city}, ${state} `;
    }

    if (country) {
      q += `${country}`;
    }

    const data = await opencage.geocode({ q });

    return data.results;
  },
};
