'use strict';

/**
 * impulse service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::impulse.impulse');
