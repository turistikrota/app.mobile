type config = {
    baseUrl: string
    turnstile: {
      siteKey: string
    }
    headers: {
      TurnstileToken: string
      Authorization: string
      AcceptLang: string
      Credentials: string
    }
    cdn: {
      notFound: string
    }
  }
  
  export const Config: config = {
    baseUrl: 'https://turistikrota.com',
    turnstile: {
      siteKey: "0x4AAAAAAALcdNs-ivmPZkOW",
    },
    headers: {
      TurnstileToken: 'X-Turnstile-Token',
      Authorization: 'Authorization',
      AcceptLang: 'Accept-Language',
      Credentials: 'Access-Control-Allow-Credentials',
    },
    cdn: {
      notFound: 'https://s3.turistikrota.com/ui/404.png',
    },
  }