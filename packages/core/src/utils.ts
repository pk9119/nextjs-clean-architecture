export const isServer = typeof window === 'undefined'

export function isEqual(x: any, y: any): boolean {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y
  return x && y && tx === 'object' && tx === ty
    ? ok(x).length === ok(y).length && ok(x).every(key => isEqual(x[key], y[key]))
    : x === y
}

export function isUndefined(value: any) {
  return value === undefined
}

export function isNullOrEmpty(value: any): boolean {
  return (
    !value ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' && Object.keys(value).length === 0)
  )
}

export const isString = <T = any>(str: string | T): str is string => {
  return typeof str === 'string'
}

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean'
}

export const int2char = (n: number) => {
  const BI_RM = '0123456789abcdefghijklmnopqrstuvwxyz'
  return BI_RM.charAt(n)
}

/**
 * base64 문자열을 hex로 변환한다.
 * @param s
 * @returns hex 문자열
 */
export const b64tohex = (s: string) => {
  const b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  const b64pad = '='
  let ret = ''
  let i
  let k = 0 // b64 state, 0-3
  let slop = 0
  for (i = 0; i < s.length; ++i) {
    if (s.charAt(i) === b64pad) {
      break
    }
    const v = b64map.indexOf(s.charAt(i))
    if (v < 0) {
      continue
    }
    if (k === 0) {
      ret += int2char(v >> 2)
      slop = v & 3
      k = 1
    } else if (k === 1) {
      ret += int2char((slop << 2) | (v >> 4))
      slop = v & 0xf
      k = 2
    } else if (k === 2) {
      ret += int2char(slop)
      ret += int2char(v >> 2)
      slop = v & 3
      k = 3
    } else {
      ret += int2char((slop << 2) | (v >> 4))
      ret += int2char(v & 0xf)
      k = 0
    }
  }
  if (k === 1) {
    ret += int2char(slop << 2)
  }
  return ret
}

export const strToHex = (str: string) => {
  return Array.from(str)
    .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('')
}

export const hexToStr = (hex: string) => {
  // 입력된 hex 문자열이 유효한지 검사
  if (!/^[0-9A-Fa-f]+$/.test(hex)) {
    throw new Error('Invalid hex string')
  }

  let str = ''
  for (let i = 0; i < hex.length; i += 2) {
    const charCode = parseInt(hex.substr(i, 2), 16)
    str += String.fromCharCode(charCode)
  }
  return str
}

/**
 * base64 문자열을 object로 치환한다.
 * @param str
 * @returns object
 */
export const b64ToObj = (str: string) => JSON.parse(Buffer.from(str, 'base64').toString())

/**
 * object를 base64로 치환한다.
 * @param obj
 * @returns base64 문자열
 */
export const objToB64 = (obj: any): string => Buffer.from(JSON.stringify(obj)).toString('base64')

/**
 * 문자열을 enum으로 치환한다.
 * @param enumObj
 * @param str
 * @returns
 */
export const strToEnum = <T extends object>(enumObj: T, str?: string | null): T[keyof T] | undefined => {
  if (typeof str === undefined || str === null) return undefined

  const enumValues = Object.values(enumObj) as string[]
  const enumKeys = Object.keys(enumObj) as (keyof T)[]

  const index = enumValues.indexOf(str!)
  if (index !== -1) {
    return enumObj[enumKeys[index] as keyof T]
  }
  return undefined
}

/**
 * random uuid 생성
 * @returns
 */
export const generateUUID = (): string => {
  if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
    // 브라우저 환경에서 Web Crypto API 사용
    return window.crypto.randomUUID()
  } else if (typeof require !== 'undefined') {
    // Node.js 환경에서 crypto 모듈 사용
    const { randomUUID } = require('crypto')
    return randomUUID()
  } else {
    // 폴백: 간단한 UUID 생성 (보안에 취약할 수 있음)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
}

/**
 * Base64 문자열을 Blob으로 변환
 * @param str
 * @param options
 */
export const b64ToBlob = (str: string, options: BlobPropertyBag): Blob => {
  const byteCharacters = atob(str)
  const byteNumbers = new Array(byteCharacters.length)
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i)
  }
  const byteArray = new Uint8Array(byteNumbers)

  return new Blob([byteArray], options)
}

export const cloneArray = <T>(targetArr: Array<T>) => {
  return JSON.parse(JSON.stringify(targetArr)) as T[]
}

export const localeStringToInt = (str: string) => {
  return parseInt(str.replace(/,/g, ''))
}
