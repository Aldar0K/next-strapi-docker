'use strict';

/**
 * post controller
 */

const { createCoreController, services } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({ strapi }) => ({
  async addView(ctx) {
    try {
      const post = await super.findOne(ctx);

      ctx.request.body.data = {
        ...ctx.request.body.data,
        views: post.data.attributes.views + 1
      };
      await super.update(ctx);

      return ctx.send({
        success: true
      });
    } catch (error) {
      console.error(error);
      return ctx.send({
        success: false
      });
    }
  }
}));
