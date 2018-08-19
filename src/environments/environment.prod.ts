export const environment = {
  production: true,
  apiUrl: 'https://moneyapp-api.herokuapp.com',

  tokenWhitelistedDomains: [ /moneyapp-api.herokuapp.com/ ],
  tokenBlacklistedRoutes: [/\/oauth\/token/]
};
