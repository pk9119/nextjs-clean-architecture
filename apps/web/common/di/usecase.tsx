'use client'

import usecase from '@repo/domain/di'
import { ReactNode, createContext, use } from 'react'

export const UseCaseContext = createContext(usecase)

export const UseCaseContextProvider = ({ children }: { children: ReactNode }) => {
  return <UseCaseContext.Provider value={usecase}>{children}</UseCaseContext.Provider>
}

export const useUseCase = () => {
  return use(UseCaseContext)
}
