export enum Services {
    Auth = 'auth',
  }
  
  export const ApiUrls: Record<Services, string> = {
    [Services.Auth]: "https://auth.api.turistikrota.com",
  }
  
  export const apiUrl = (service: Services, path: string) => `${ApiUrls[service]}${path}`