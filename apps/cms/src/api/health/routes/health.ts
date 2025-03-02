export default {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'health.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
