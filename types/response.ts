export type BaseResponse = {
    message: string
  }
  export type ValidationErrorDetail = {
    field: string
    message: string
    namespace?: string
    value: string
  }
  
export type AnyResponse<T> = T | ValidationErrorDetail[] | BaseResponse

export function isBaseResponse(response: any): response is BaseResponse {
    return response && response.message
  }

  export type ListResponse<T> = {
    list: T[]
    total: number
    filteredTotal: number
    isNext: boolean
    isPrev: boolean
    page: number
  }