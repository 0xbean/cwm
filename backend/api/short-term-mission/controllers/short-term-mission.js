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
    let stms = await strapi.query("short-term-mission").find({ locale });

    const data = await Promise.all(
      stms.map(async (stm) => {
        const { id, geocode, country, city, state, published_at } = stm;
        if (geocode === null && published_at !== null) {
          const geocodeResult = await strapi.services[
            "short-term-mission"
          ].mapGeocoder(country, state, city);

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
          .query("short-term-mission")
          .update({ id: entry.id }, { geocode: entry.geocode });
      }
    });

    // filter through and only return those that are published:
    const published_stms = stms.filter((stm) => stm.published_at !== null);

    return published_stms;
  },
};
