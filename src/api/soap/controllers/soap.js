'use strict';

/**
 * soap controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::soap.soap');
