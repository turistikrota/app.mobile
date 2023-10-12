export enum Services {
    Auth = 'auth',
    Account = 'account'
  }
  
  export const ApiUrls: Record<Services, string> = {
    [Services.Auth]: "https://auth.api.turistikrota.com",
    [Services.Account]: "https://account.api.turistikrota.com",
  }
  
  export const apiUrl = (service: Services, path: string) => `${ApiUrls[service]}${path}`