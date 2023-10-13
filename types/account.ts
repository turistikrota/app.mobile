export type Account = {
    userName: string
    fullName: string
    avatarUrl: string
    description: string
    social: AccountSocial[]
    isActive: boolean
    completedRate: number
    isVerified: boolean
    birthDate: string | null
    createdAt: string
    updatedAt: string
  }
  
  export type AccountSocial = {
    platform: string
    url: string
  }

  export function isAccount(arg: any): arg is Account {
    return arg && typeof arg.userName === 'string' && typeof arg.fullName === 'string' && typeof arg.avatarUrl === 'string' && typeof arg.description === 'string' && typeof arg.social === 'object' && typeof arg.isActive === 'boolean' && typeof arg.completedRate === 'number' && typeof arg.isVerified === 'boolean' && (arg.birthDate === null || typeof arg.birthDate === 'string') && typeof arg.createdAt === 'string' && typeof arg.updatedAt === 'string'
  }