module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        providers: {
          google: {
            enabled: true,
            clientId: env('GOOGLE_CLIENT_ID'),
            clientSecret: env('GOOGLE_CLIENT_SECRET'),
            redirectUri: env('FRONTEND_URL'),
          },
        },
      },
    },
  });
  