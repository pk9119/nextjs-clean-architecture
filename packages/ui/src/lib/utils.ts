import { clsx, type ClassValue } from 'clsx'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    React.isValidElement(value) || // React 요소인지 확인
    value === null ||
    value === undefined
  )
}
