'use strict';

/**
 * impulse router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::impulse.impulse');
