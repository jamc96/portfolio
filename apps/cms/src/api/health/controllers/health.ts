/**
 * A set of functions called "actions" for `health`
 */

export default {
  find: async (ctx) => {
    try {
      ctx.body = new Date().toISOString();
    } catch (err) {
      ctx.body = err;
    }
  }
};
