export enum Services {
    Auth = 'auth',
    Account = 'account',
    Upload = 'upload'
  }
  
  export const ApiUrls: Record<Services, string> = {
    [Services.Auth]: "https://auth.api.turistikrota.com",
    [Services.Account]: "https://account.api.turistikrota.com",
    [Services.Upload]: "https://upload.api.turistikrota.com"
  }
  
  export const apiUrl = (service: Services, path: string) => `${ApiUrls[service]}${path}`