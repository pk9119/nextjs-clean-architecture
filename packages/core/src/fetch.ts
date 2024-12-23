import returnFetchJson, { JsonRequestInit } from 'return-fetch-json'

export const fetchExtended =
  () =>
  <T>(url: string, init?: JsonRequestInit): Promise<T> => {
    return returnFetchJson()(url, init)
      .then(res => res.body)
      .then((data: any) => data?.result)
  }
