'use strict';

/**
 * soap router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::soap.soap');
