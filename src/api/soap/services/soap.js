'use strict';

/**
 * soap service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::soap.soap');
