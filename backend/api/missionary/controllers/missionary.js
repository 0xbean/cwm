"use strict";

const url = require("url");

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(params) {
    const queryObject = url.parse(params.request.url, true).query;
    const locale = queryObject._locale;
    let missionaries = await strapi.query("missionary").find({ locale });

    const data = await Promise.all(
      missionaries.map(async (missionary) => {
        const { id, geocode, country, city, state } = missionary;
        if (geocode === null) {
          const geocodeResult = await strapi.services.missionary.mapGeocoder(
            country,
            state,
            city
          );

          if (geocodeResult) {
            const coords = geocodeResult[0].geometry;
            return { id, geocode: coords };
          }
        }
      })
    );

    data.map(async (entry) => {
      if (entry) {
        await strapi
          .query("missionary")
          .update({ id: entry.id }, { geocode: entry.geocode });
      }
    });

    return missionaries;
  },
};
