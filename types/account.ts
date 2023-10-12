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
    return arg && arg.userName && arg.fullName && arg.avatarUrl && arg.description && arg.social && arg.isActive && arg.completedRate && typeof arg.isVerified !== undefined && arg.birthDate && arg.createdAt && arg.updatedAt;
  }