export default ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CDN_NAME'),
        api_key: env('CDN_KEY'),
        api_secret: env('CDN_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'revalidation-button': {
    enabled: true,
    config: {
      url: env('REVALIDATE_URL')
    }

  },
});
