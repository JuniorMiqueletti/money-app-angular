export const environment = {
  production: true,
  apiUrl: 'https://moneyapp-api.herokuapp.com',

  tokenWhitelistedDomains: ['https://moneyapp-api.herokuapp.com'],
  tokenBlacklistedRoutes: ['https://moneyapp-api.herokuapp.com/oauth/token']
};
