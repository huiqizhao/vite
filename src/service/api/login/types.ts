export interface ILoginParams {
  name: string
  code: string | number
  remember: 0 | 1
  user_type_id: 1 | 2
  type: 1 | 2
}

export interface ILoginApi {
  login: (params: ILoginParams) => Promise<any>
}
